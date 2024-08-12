import React, { useEffect, useState } from 'react'
import api from"../utils/api"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { baseImgURL } from '../contants';
import { Link } from 'react-router-dom';
const MovieList = ({genre}) => {
  const[movies,setMovies]=useState([])
  useEffect(()=>{
    //apiye gönderilecek parametreyi belirledim.
    const params={
      with_genres:genre.id,
    }
    //*api isteği atıldı ve movie statine aktarıldı
api
.get("/discover/movie",{params})
.then((res)=>setMovies(res.data.results))
.catch((err)=>console.error(err));
  },[]);

  return (
    <div className='my-10'>
      {<h1 className='text-3xl font-semibold mb-3'>
        {genre.name}</h1>}
        <Splide options={{
          pagination:false,
          autoWidth:true,
          gap:"15px"
        }}>
        {movies.map((movie)=>(
          <SplideSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
            <img  className="max-w-[300px] h-full cursor-pointer border-x-zinc-100 rounded"src={baseImgURL+movie.poster_path} alt="" />
            </Link>
          </SplideSlide>
        ))}
        </Splide>
    </div>
  )
}

export default MovieList