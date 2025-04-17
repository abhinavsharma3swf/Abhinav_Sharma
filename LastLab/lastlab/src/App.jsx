import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import SearchAppBar from './Components/SearchAppBar.jsx';
import { useEffect, useState} from "react";

import axios from "axios";
import {Results} from "./Components/Results.jsx";
import {Box, Button, Typography} from "@mui/material";
import cinema from "./Components/cinema.webp";
import {ErrorPage} from "./Components/ErrorPage.jsx";
import SearchContext from "./Components/SearchContext.js";


function App() {

    const [movies, setMovies] = useState()
    const [error, setError] = useState()
    const [searchTerm, setSearchTerm] = useState("")



    useEffect(() => {

        // console.log(searchTerm)
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: { query: searchTerm, language: 'en-US', page: '1'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer${VITE_TMDB_API_TOKEN}`
            }
        };

        setError(null);

        axios
            .request(options)
            .then(response => {
                const result= response.data.results
                if(result.length === 0) {
                    setError("noResult")
                }
                    setMovies(result);
            })
            .catch(error =>{
                setError("404error")
            })
    }, [searchTerm]);


    const handleClick = () => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing',
            params: {language: 'en-US', page: '1'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer${VITE_TMDB_API_TOKEN}`
            }
        };

        setError(null);

        axios
            .request(options)
            .then(response => {
                setMovies(response.data.results)
            })
            .catch(error =>{
                setError("404error")
            })
    }
     const home =(
         <Box
             sx={{
                 backgroundImage: "url('/cinema.webp')",
                 backgroundSize: 'cover',
                 height: '100vh',
                 display: 'flex',
                 paddingTop: '45px',
                 flexDirection: 'column',
                 justifyContent: 'center',
                 alignItems: 'center',
                 color: 'white',
                 textShadow: '2px 2px 4px black',
             }}
         >
             <Typography variant="h2">Welcome to CineWorld</Typography>
             <img src={cinema} alt="picture"/>
             <Link to={"/movies"}>
             <Button
                 variant="contained"
                 color="secondary"
                 onClick={handleClick}
                 sx={{ mt: 4 }}
             >
                 View Now Playing
             </Button>
             </Link>
         </Box>
     );



    return (
        <SearchContext.Provider value={{searchTerm, setSearchTerm}}>
            <theme></theme>
            <Router>

                <SearchAppBar>

                </SearchAppBar>
                <Routes>
                    <Route path={"/movies"}
                           element= {error ? <Navigate to={'/error'}/> : <Results movies={movies}/>}/>
                    <Route path={"/"}
                           element={home}/>
                    <Route path={"/error"}
                           element={<ErrorPage error={error}></ErrorPage>}/>
                </Routes>

            </Router>


        </SearchContext.Provider>
    )
}

export default App

