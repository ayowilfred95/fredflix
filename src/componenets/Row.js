import React,{useEffect, useState} from 'react'
import './Row.css';
import axios from '../axios';


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/variable
    //Run a piece of code when the row loads i.e make a request from tmdb
    useEffect(()=>{
        // if [] blank, runs when the row loads, and dont run again i.e dependency, it depends on row changes
        async function fetchData () {
          try{
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
          }catch(error) {
            console.log(error.message);
          }
        }
       fetchData();
    },[fetchUrl]);

   console.log(movies); 



  return (
    <div className='row'>
        {/** title */}
        <h2>{title}</h2>

        <div className='row_posters'>  
             {/** row_poster */}

             {movies.map(movie => (
                <img 
                key={movie.id}
                className={`row_poster ${isLargeRow  && "row_posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name} />
             ))}
        </div>
    </div>
  )
}

export default Row;
