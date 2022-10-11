import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'

function Search() {
    const location = useLocation()
    useEffect(() => {
        console.log(location.state);
    }, [location.state])
  return (
    <div>Search</div>
  )
}

export default Search