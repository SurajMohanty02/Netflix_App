import axios from "axios";
import React, { useEffect, useState } from "react";
import request from "./request";
import instance from "./Api";
import "./Banner.css";
import "./Spinner.css";
import { Button } from "@material-ui/core";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Banner = () => {
  const [movie, setMovie] = useState(request);
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(true);
  const [Trailer, setTrailer] = useState("");
  const baseurl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchmovie() {
      const res = await instance.get(movie.NetflixOriginals);
      setLoader(false);
      const len = res.data.results.length;
      //console.log(len);
      setPhotos(res.data.results[Math.round(Math.random() * len - 1)]);
    }
    fetchmovie();
  }, [movie.NetflixOriginals]);
  //console.log(photos);

  function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }
  const opts = {
    height: "190",
    width: "50%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handelCli = (photos) => {
    if (Trailer) {
      setTrailer("");
    } else {
      movieTrailer(photos?.name || photos?.title).then((url) => {
        const urlparams = new URLSearchParams(new URL(url).search);
        setTrailer(urlparams.get("v"));
      });
    }
  };

  return (
    <React.Fragment>
      {loader ? (
        <div className="text-center">
          <div className="loadingio-spinner-wedges-3c4m83uvadi">
            <div className="ldio-bekjsamjjx9">
              <div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <header
          className="banner"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${
              photos.backdrop_path ? photos.backdrop_path : photos.poster_path
            }")`,
            backgroundPosition: "center center center center",
            backgroundSize: "cover",
          }}
        >
          <div className="banner__poster">
            <h1 className="left">
              {photos.name || photos.title || photos.original_name}
            </h1>
            <div className="button">
              <Button id="btn" onClick={() => handelCli(photos)}>
                Play
              </Button>
              <Button id="btn">MyList</Button>
            </div>
            <h2>{truncate(`${photos.overview}`, 150)}</h2>
          </div>
          <div className="fade"></div>
        </header>
      )}
      <div className="text_center">
        {Trailer && <Youtube videoId={Trailer} opts={opts} />}
      </div>
    </React.Fragment>
  );
};

export default Banner;
