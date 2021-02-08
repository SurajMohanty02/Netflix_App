import React from "react";
import "./Container.css";
import request from "./request";
import Row from "./Row";

const Container = () => {
  return (
    <section>
      <div className="App">
        <Row title="Netflix Originals" url={request.NetflixOriginals} />
        <Row title="Trending" url={request.Trending} />
        <Row title="Top Rated" url={request.TopRated} />
        <Row title="Action Movies" url={request.ActionMovies} />
        <Row title="Commedy Movies" url={request.CommedyMovies} />
        <Row title="Horror Movies" url={request.HorrorMovies} />
        <Row title="Romantic Movies" url={request.RomanticMovies} />
      </div>
    </section>
  );
};

export default Container;
