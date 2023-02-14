import React from 'react';
import "./MovieDetail.css";

export const MovieDetail = React.memo(({ movie }) => {
    return (
        <div className="movie-detail">
            <div className="movie-img">
                <img src={movie.poster_path} alt="Movie poster" />
            </div>
            <div className="movie-data">
                <div className="movie-data-main">
                    <h2 className="movie-name">{movie.title}</h2>
                    <h6 className="movie-tagline">{movie.tagline}</h6>
                    <p className="movie-synopsis">{movie.overview}</p>
                </div>
                <div className="movie-data-meta">
                    <div className='movie-meta-data'>
                        {Array.isArray(movie.genres) && movie.genres.length ? (<p className="movie-category">{movie.genres.map(genre => genre.name).join(', ')}</p>) : null}
                        {Array.isArray(movie.production_companies) && movie.production_companies.length ? (<p className="movie-producers">{movie.production_companies.map(com => com.name).join(', ')}</p>) : null}
                    </div>
                    <div className="movie-meta">
                        <h4 className='movie-meta-key'>Original Release:</h4>
                        <p className="movie-meta-value">{movie.release_date}</p>
                    </div>
                    <div className="movie-meta">
                        <h4 className='movie-meta-key'>Running Time:</h4>
                        <p className="movie-meta-value">{movie.runtime}</p>
                    </div>
                    <div className="movie-meta">
                        <h4 className='movie-meta-key'>Box Office:</h4>
                        <p className="movie-meta-value">{movie.revenue}</p>
                    </div>
                    <div className="movie-meta">
                        <h4 className='movie-meta-key'>Vote Average:</h4>
                        <p className="movie-meta-value">{movie.vote_average} / 10</p>
                    </div>
                </div>
            </div>
        </div>
    )
})