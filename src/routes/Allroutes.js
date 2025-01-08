import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movielist from '../pages/Movielist'
import Movietetails from '../pages/Movietetails'
import Search from '../pages/Search'

const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Movielist title='Your Guid to Great Movie' apipath="movie/now_playing"/>}/>
        <Route path='movies/popular' element={<Movielist title='Popular Movies' apipath="movie/popular"/>}/>
        <Route path='movies/top' element={<Movielist title='Top Rated movies' apipath="movie/top_rated"/>}/>
        <Route path='movies/upcoming' element={<Movielist title='Upcoming Movies'apipath="movie/upcoming"/>}/>
        <Route path='movie/:id' element={<Movietetails/>}/>
        <Route path='search' element={<Search apipath="search/movie"/>}/>
    </Routes>

    </>
  )
}

export default Allroutes