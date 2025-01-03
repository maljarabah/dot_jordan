import "./Card.css"

function Card({ movie }) {
    const releaseDate = new Date(movie.release_date).toLocaleDateString(
        'en-US',
        { year: 'numeric', month: 'short', day: 'numeric' }
    )

    const truncateTextWithEllipsis = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    }

    return (
        <div className="card">
            <span className="card_overlay" style={{ backgroundImage: `url("https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${movie.poster_path}")` }}></span>
            <div className="card_head">
                <img className="card_poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
                <div className="card_info">
                    <h2 className="card_title">{movie.title}</h2>
                    <p className="card_date">{releaseDate}</p>
                    <p className="card_avg">{movie.vote_average.toFixed(1)}</p>
                </div>
            </div>
            <p className="card_desc">{truncateTextWithEllipsis(movie.overview, 150)}</p>
        </div>
    )
}

export default Card
