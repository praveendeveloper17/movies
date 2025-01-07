import React from 'react'
import { Link } from 'react-router-dom'
import backup from "../assets/my-new image1.jpg"

const Card = ({image, alttext, movie}) => {
  const {backdrop_path,id,overview,title,
    vote_average,vote_count,poster_path} = movie;
    const images = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}`: backup;
  return (
    <div className='col'>
      <div className='card shadow-sm' title={title}>
      <img src={images} alt={alttext} className=' card-img-top' />
        <div className='card-body'>
          <h5 className='card-title text-primary text-overflow-1'>{title}</h5>
          <p className='card-text text-overflow-2'>{overview}</p>
          <div className='d-flex justify-content-between'>
            <Link to="" className='btn btn-sm btn-outline-primary stretched-link'>
            Read More
            </Link>
            <small>
              <i className='bi bi-star-fill text-warning'></i>
              {vote_average}| {vote_count} review
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card