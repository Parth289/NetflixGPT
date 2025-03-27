// const useMovieTrailer =()=>{
//      const getMovieTrailer =async()=>{
//             const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, TMDB_OPTIONS);
//             const json = await data.json()
//             const trailers = json.results.filter((video)=>(video.type === "Trailer"))
//             setNewTrailers(trailers)
//             }
    
//         useEffect(()=>{
//             getMovieTrailer()
//         },[])
    
// }

// export default useMovieTrailer