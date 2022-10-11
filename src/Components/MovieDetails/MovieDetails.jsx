import { Card, CardContent, CardMedia, Chip } from '@mui/material'
import axios from 'axios'
import StarIcon from '@mui/icons-material/Star';
import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { api } from '../../links'


function MovieDetails() {
    const location = useLocation()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        console.log(location.state);
        axios.get(api.movieDetail + location.state)
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setMovie(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [location.state])
    
  return (
    <div className='container p-2'>
        {movie.id? <Card sx={{ display: 'flex', padding:"15px" }} className="bg-dark text-light">
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        className="m-2"
        image={api.image + movie.poster_path}
        alt="Live from space album cover"
      />
        <CardContent style={{position:"relative"}}>
            <h4 className='d-inline'>{movie.title}</h4> <span><small>( {movie.release_date.substring(0, 4)} )</small></span>
            <hr />
            <h6>Overview</h6>
            <p className='my-2'>{movie.overview}</p>
            <p className='my-1'><small><StarIcon className='text-warning'/> Rating : {movie.vote_average.toFixed(2)} of {movie.vote_count}</small></p>
            <p className='my-1'><small><FavoriteIcon className='text-danger'/> Popularity : {movie.popularity.toFixed(2)}</small></p>
            <div style={{position:"absolute", bottom:"15px"}}>Genres : {movie.genres.map((el, i)=>{
                return <Chip label={el.name} className='bg-white mx-1' key={i} size="small" />
            })}</div>
        </CardContent>
    </Card>:""}
    </div>
  )
}

export default MovieDetails