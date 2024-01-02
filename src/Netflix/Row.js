import React from "react";
import './Row.css';
import { useState, useEffect } from "react";
import axios from "./axios";
// import 'swiper/css';




function Row({ title, url, isLarge = false, clips }) {
    const baseurl = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const moviedata = await axios.get(url)
        setMovies(moviedata.data.results)
        //  console.log(moviedata);
    }
    useEffect(() => {
        fetchMovies();
    }, []);
    //console.log(movies)
    return (
        <div className="row">
            <h3>{title}</h3>
            <div className="row-largelist">
                {
                    movies.map((movie) => {
                        return (
                            <img key={movie.id} src={`${baseurl}${movie.poster_path}`} />
                        )
                    })
                }
            </div>

            <h5>{clips}</h5>
            <div className="row-smalllist">
                {
                    movies.map((movie) => {
                        return (
                            <img key={movie.id} src={`${baseurl}${movie.backdrop_path}`} />
                        )
                    })
                }
            </div>
        </div>
    );
}
export default Row;