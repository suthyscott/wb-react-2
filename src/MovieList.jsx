import { useState } from "react"

const MovieList = () => {
    const [movies, setMovies] = useState(['Alien', 'Predator', 'Alien vs. Predator'])
    const [inputValue, setInputValue] = useState('')

    const moviesDisplay = movies.map((movie) => {
        // console.log(movie)
        return <p key={movie}>{movie}</p>
    })

    const handleAddMovie = () => {
        setMovies([...movies, inputValue])
        setInputValue('')
    }

    // console.log('new render', inputValue)
    return (
        <div>
            <h2>MovieList</h2>            
            {/* {movies.map((movie) => <p>{movie}</p>)} */}
            {moviesDisplay}

            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={handleAddMovie}>Add Movie</button>
            </div>
        </div>
    )
}

export default MovieList