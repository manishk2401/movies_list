
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesList from './Components/MoviesList/MoviesList';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import { useState } from 'react';
import Search from './Components/Search/Search';

function App() {
  const [value, setValue] = useState('')
  const searching =(e)=>{
    setValue(e)
  }
  return (
    <BrowserRouter>
      <NavbarComponent search={searching} />
      <Routes>
        <Route path="/" element={<MoviesList searchValue={value} />}> </Route>
        <Route path="/movie/:name"  element={<MovieDetails/>}> </Route>
        <Route path="/search-movie/:movie"  element={<MoviesList/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
