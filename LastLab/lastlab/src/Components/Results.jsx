import {MovieCard} from "./MovieCard.jsx";

export const Results = ({movies}) =>{

    console.log(movies)

    if(!movies)
        return (
            <h1>Loading......</h1>
        )


    let moviesArray = movies.map(movie => {
        return <MovieCard data={movie}
                          key={movie.id}/>
    })

        return (
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
                {moviesArray}
            </div>
        )
    }
