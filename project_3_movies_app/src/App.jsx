import { useState } from "react"
import axios from "axios"
import Hero from "./components/Hero/Hero"
import Card from "./components/Card/Card"
import Footer from "./components/Footer"


function App() {
    const apiKey = "d7835d06aa9bf95f73ab15509e7dc769"

    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const updateQuery = (event) => {
        setQuery(event.target.value)
    }

    const movieSearch = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)

        setMovies(res.data.results)

        if (!res.data.results.length) {
            alert("Oops! No results found. Try again.")
        } else {
            setTimeout(() => {
                document.getElementById("cards").scrollIntoView({ behavior: "smooth", block: "start" })
            }, 100)
        }
    }

    const moviesSearchEvent = (event) => {
        if (event.key == "Enter" && query)
            movieSearch()
    }

    return (
        <>
            <Hero updateQuery={updateQuery} moviesSearchEvent={moviesSearchEvent} moviesSearch={movieSearch} />

            <div className="cards" id="cards" style={{ padding: movies.length ? "50px" : "" }}>
                {
                    movies.map(
                        (movie, i) => movie.poster_path && <Card key={i} movie={movie} />
                    )
                }
            </div>

            {movies.length ? <Footer /> : ""}
        </>
    )
}

export default App
