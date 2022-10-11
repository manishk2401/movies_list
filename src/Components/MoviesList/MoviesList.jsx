import { Avatar, Card, CardContent, CardHeader, CardMedia, Chip, Grid, IconButton, Pagination, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import style from './style.module.css'
import React, { useEffect, useState } from 'react'
import { api } from '../../links'

function MoviesList(props) {
    const [moviesList, setMoviesList] = useState({})
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const location = useLocation()

    const handleChange = (event, value) => {
        setPage(value);
        setLoading(true)
    };

    useEffect(() => {
        console.log();
        if (location.state !== null) {
            axios.get(api.movieSearch + "page=" + page + "&query=" + location.state)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    setMoviesList(response.data.data)
                    setLoading(false)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        } else {
            axios.get(api.movieList + page)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    setMoviesList(response.data.data)
                    setLoading(false)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }, [location.state, page])

    return (
        <div className='px-5 container'>
            <h4 className='my-3'>{location.state !== null ? "Search movie : " + location.state : "Popular Movies"}</h4>
            <Pagination count={50} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
            {!loading ? moviesList.results.map((el, i) => {
                return <Link to={"/movie/" + el.title} state={el.id} key={i} className={style.links}>
                    <Card sx={{ display: 'flex', margin: "10px" }} className="bg-dark text-white">
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={el.backdrop_path !== null ? api.image + el.backdrop_path : el.poster_path !== null ? api.image + el.poster_path : "http://sanaxmedical.com.au/wp-content/uploads/2015/06/No_image_available-10.jpg"}
                            alt="Live from space album cover" />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {el.title} <Chip label={el.vote_average} size="small" color="primary" variant="outlined" />
                                </Typography>
                                <Typography variant="subtitle1" color="text.white" component="div">
                                    <small>
                                        Released Date : {el.release_date}
                                    </small>
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}><small>{el.overview.slice(0, 200) + '...'}</small>
                            </Box>
                        </Box>
                    </Card>
                </Link>
            }) : <h5>Loading...</h5>}
        </div>
    )
}

export default MoviesList