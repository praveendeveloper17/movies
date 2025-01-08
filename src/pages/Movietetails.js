import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/my-new image1.jpg";
import Utils from "../utils/Utils"

const Movietetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const key = process.env.REACT_APP_API_KEY;
  const url = key
    ? `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`
    : null;

  useEffect(() => {
    async function fetchMovie() {
      if (!url) {
        setError("Invalid URL or missing API key.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setMovie(jsonData); // Set movie details
        console.log(jsonData);
        setError(null); // Clear errors if data is fetched successfully
      } catch (err) {
        console.error("Failed to fetch movie data:", err);
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    }

    fetchMovie();
  }, [url]);

  // Update document title dynamically when movie is fetched
  useEffect(() => {
    if (movie && movie.title) {
      document.title = movie.title; // Set the document title to the movie title
    }
  }, [movie]);

  // Loading state
  if (loading) {
    return (
      <main className="container">
        <p>Loading...</p>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="container">
        <h1>Error</h1>
        <p>{error}</p>
      </main>
    );
  }

  // Extract poster_path from the movie object
  const poster_path = movie.poster_path;
  const images = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : backup;

  // Render movie details
  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={images} alt={movie.title} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.title}</h3>
          <p className="mt-3">{movie.overview}</p>

          {movie.genres ? <p className="d-flex gap-3">
            {movie.genres.map((genre)=>(
              <span key={genre.it} className="badge bg-danger">{genre.name}</span>
            ))}
          </p> : ""}

          <p className="mt-2">
          <i className='bi bi-star-fill text-warning'></i> {movie.vote_average} |
          <i className='bi bi-people-fill text-success'></i> {movie.vote_count} reviews
          </p>

          <table className="table table-bordered w-50 mb-2">
            <tbody>
              <tr>
              <th>Runtime</th>
              <td>{Utils(movie.runtime)}</td>
              </tr>
              <tr>
              <th>ReleaseDate</th>
              <td>{movie.release_date}</td>
              </tr>
              <tr>
              <th>Revenue</th>
              <td>{movie.revenue}</td>
              </tr>
              <tr>
              <th>Budget</th>
              <td>{movie.budget}</td>
              </tr>
            </tbody>
          </table>
          <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} className="btn btn-warning">Viwe In IMDB</a>
        </div>
      </div>
    </main>
  );
};

export default Movietetails;
