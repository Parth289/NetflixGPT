import React from 'react'
import BackgroundMovie from './BackgroundMovie'
import BackgroundTitle from './BackgroundTitle'
import { useSelector } from 'react-redux'
import Store from '../../utiles/Store'

const MainContainer = () => {
    const movies = useSelector((Store)=>Store.movie?.nowPlayingMoview)
    if (!movies) return

    const mainMovie = movies[0]
    const {original_title, overview ,id} = mainMovie
  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <BackgroundTitle title={original_title} overview={overview} />
        <BackgroundMovie id={id}/>
    </div>
  )
}

export default MainContainer