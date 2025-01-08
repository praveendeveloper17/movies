import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomCard from '../components/Card'; // Import your custom card component
import Usefetch from '../hooks/Usefetch';

const Search = ({apipath}) => {
  const [SearchParams] = useSearchParams();
  const queryTerm = SearchParams.get("q");
  const {data : movies} = Usefetch(apipath,queryTerm);

  useEffect (() => {
    document.title = `Search result for ${queryTerm}`;
  })
  return (
    <main className='container'>
      <h5 className='text-danger py-2 border-bottem'>
        {movies.length===0?`No Result Found For ${queryTerm}` : `Result For ${queryTerm}`}
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-2 g-3">
          {movies.map((movie)=> {
            return <CustomCard  key={movie.id} movie={movie}/>
          })}
        </div>
    </main>
  )
}

export default Search