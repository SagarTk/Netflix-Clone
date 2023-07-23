import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'

const url = "https://api.themoviedb.org/3/movie" ;
const apiKey = "0d87854d47c563e2c6d756a17223f1cc" ;
const img_url = "https://image.tmdb.org/t/p/w500" ;
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({img}) => {
  return (
    <img className='card' src={img} alt="" />
  )
}

const Row = ( { title , arr = [] } ) => {
  return (
    <div className='row'>
    
    <h2>{title}</h2>
  
    <div>

      {
        arr.map( (item , index) => {
          return <Card key={index} img={`${img_url}${item.poster_path}`} />
        })
      }
    </div>

  </div>
  )

}

const Home = () => {
  // https://api.themoviedb.org/3/movie/popular?api_key=0d87854d47c563e2c6d756a17223f1cc

  // https://api.themoviedb.org/3/movie/upcoming?api_key=0d87854d47c563e2c6d756a17223f1cc

  const [upcomingMovies , setUpcomingMovies] = useState([]) ;
  const [nowPlayingMovies , setNowPlayingMovies] = useState([]) ;
  const [popularMovies , setPopularMovies] = useState([]) ;
  const [topRatedMovies , setTopRatedMovies] = useState([]) ;

  useEffect( () => {

    const fetchUpcoming = async() => {

      const {data: {results} } =  await axios.get(`${url}/${upcoming}?api_key=${apiKey}`)
      setUpcomingMovies(results) ;
    };
    fetchUpcoming() ;
    
    const fetchNowPlaying = async() => {
      
      const {data: {results} } =  await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}`)
      setNowPlayingMovies(results) ;
    };
    fetchNowPlaying() ;
    
    const fetchPopular = async() => {
      
      const {data: {results} } =  await axios.get(`${url}/${popular}?api_key=${apiKey}`)
      setPopularMovies(results) ;
    };
    fetchPopular() ;
    
    const fetchTopRated = async() => {
      
      const {data: {results} } =  await axios.get(`${url}/${topRated}?api_key=${apiKey}`)
      setTopRatedMovies(results) ;
    };
    fetchTopRated() ;
  
  } , [])

  
  return (
    <div>
      <section className='home'>
        
        <div className="banner">
          <img src="https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg" alt="cover" />
        </div>

        <Row title={"Upcoming"} arr={upcomingMovies} />
        <Row title={"Now Playing"} arr={nowPlayingMovies} />
        <Row title={"Popular"} arr={popularMovies} />
        <Row title={"Top Rated"} arr={topRatedMovies} />
        
        
      </section>
    </div>
  )
}

export default Home
