import React from "react";
import './Home.css';
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
import request from "./request";

function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Banner/>
            <Row
                title="NETFLIX ORIGINALS"
                url={request.fetchNetflixOriginals}
                isLarge={true}
                clips="Movie clips"
            />
          <Row
                title="TRENDING NOW"
                url={request.fetchTrending}
                clips="Trending clips"
            />
            <Row
                title="TOP RATED"
                url={request.fetchTopRated}
                clips="Premium clips"
            />
            <Row
                title="ACTION MOVIES"
                url={request.fetchActionMovies}
                clips="Action clips"
            />
            <Row
                title="COMEDY MOVIES"
                url={request.fetchComedyMovies}
                clips="Comedy clips"
            />
            <Row
                title="HORROR MOVIES"
                url={request.fetchHorrorMovies}
                clips="Horror clips"
            />
            <Row
                title="ROMANCE MOVIES"
                url={request.fetchRomanceMovies}
                clips="Romantic clips"
            />
            {/* <Row
                title=""
                url={request.}
                clips="Drama clips"
            /> */}
        </div>
    );
}
export default Home;