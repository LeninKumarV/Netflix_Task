import React from "react";
import axios from "./axios";
import request from "./request";
import { useState, useEffect } from "react";
import './Banner.css';

function Banner() {
    const [image, setImage] = useState([]);

    const dataFetch = async () => {

        const datas = await axios.get(request.fetchNetflixOriginals);
        const con = Math.floor(Math.random() * datas.data.results.length - 1)
        setImage(datas.data.results[con]);
        //console.log(datas.data)
    }
    useEffect(() => {

        dataFetch();
    }, []);

    //short the desscription contents
    function short(string, n) {
        return (
            string?.length > n ? string.substr(0, n - 1) + "..." : string
        );
    }

    return (
        <div className="Banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${image?.backdrop_path}")`,
            }}>
            <div className="banner-contents">
                <h1>{image?.name}</h1>
                <div className="btn">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>{short(image?.overview, 150)}</p>
            </div>
        </div>
    );
}
export default Banner;