import { useState } from 'react';
import './App.css';
import {Home} from "./component/Home.jsx";
import {About} from "./component/About.jsx";
import {Contact} from "./component/Contact.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import axios from "axios";
import {MovieCard} from "./component/MovieCard.jsx";


function App() {
  const [movies, setMovies] = useState("")

    const handleClick = () => {
      //endpoint
        //xml json
        //how much data
        //what does data look like  //These points are very important and ensure to follow these steps
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing',
            params: {language: 'en-US', page: '1'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer${process.env.VITE_TMDB_API_TOKEN}`
            }
        };

        axios
            .request(options)
            .then(response => {
                console.log(response.data.results)
                let moviesArray = response.data.results.map(movie => {
                    return <MovieCard data={movie}
                    key={movie.id}/>

                })
                setMovies(moviesArray)
            })
            .catch(error =>{
            console.error(error.message)
        })
    }

    return (
    <>
      <h1>App Comp</h1>
        <Router>
            <div className="App"></div>
            <ul>
                <li>
                {/*    Normally we would use anchor tags but in react we use the link components*/}
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>
            <hr/> {/*{This gives a line and this can be controlled with CSS}*/}
            <div>
            <Routes>
                <Route path={"/home"}
                       element={<Home></Home>}>
                </Route>
                <Route path={"/about"}
                       element={<About/>}>
                </Route>
                <Route path={"/contact"}
                       element={<Contact/>}>
                </Route>
            </Routes>
            </div>
        </Router>

            <button onClick={handleClick}>Now Playing</button>
        {movies}


    </>
  )
}

export default App
