import React, { useEffect, useState } from 'react'
import { TMDB_OPTIONS } from '../../utiles/Constants'

const BackgroundMovie = ({id}) => {
    const [newtrailers,setNewTrailers] = useState([])

    const getMovieTrailer =async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, TMDB_OPTIONS);
        const json = await data.json()
        const trailers = json.results.filter((video)=>(video.type === "Trailer"))
        setNewTrailers(trailers)
        }

    useEffect(()=>{
        getMovieTrailer()
    },[])

  return (
    <div className='w-screen'>
        <iframe 
        className='w-screen aspect-video'
 
        src={`https://www.youtube.com/embed/${newtrailers[0]?.key}?autoplay=1&mute=1&controls=0`} 
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin" 
     >
    </iframe>
     </div>
  )
}

export default BackgroundMovie