import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCard from '../components/Card'; // Import your custom card component
// import backup from '../assets/farmal image.jpg';
// import backup1 from '../assets/my-new image1.jpg';
// import backup2 from '../assets/new-image2.jpg';
import Usefetch from '../hooks/Usefetch';

const Movielist = ({ title, apipath }) => {
  const {data: movies} = Usefetch(apipath)
  useEffect(() => {
    document.title = title;
  });

  const navigator = useNavigate();

  return (
    <div>
      <main className="container">
        {title === 'Your Guid to Great Movie' && (
          <div className="bg-body-tertiary p-5 border mb-5">
            <h3 className="text-primary">Welcome to Movie</h3>
            <p className="lead">
              Action Explosive stunts and high-octane battles where the hero faces impossible odds to save the day.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigator('/movies/upcoming');
              }}
            >
              Explore Now
            </button>
          </div>
        )}
        <h5 className="text-danger py-2 border-bottom">{title}</h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-2 g-3">
          {movies.map((movie)=> {
            return <CustomCard  key={movie.id} movie={movie}/>
          })}
        </div>
      </main>
    </div>
  );
};

export default Movielist;
