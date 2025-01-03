import "./Hero.css"

function Hero({ updateQuery, moviesSearchEvent, moviesSearch }) {
    return (
        <div className="hero">
            <div className="hero_content">
                <h1 className="hero_title">Welcome to MovieHub</h1>
                <p className="hero_subtitle">Discover your next favorite movie!</p>
                <div className="search">
                    <input className="search_box" type="text" placeholder="e.g. Despicable Me" onChange={updateQuery} onKeyDown={moviesSearchEvent} />
                    <input className="search_btn" type="button" value="Search" onClick={moviesSearch} />
                </div>
            </div>
        </div>
    )
}

export default Hero
