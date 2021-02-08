import React, { useEffect, useState } from "react";
import instance from "./Api";
import "./Row.css";
import "./Spinner.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseurl = "https://image.tmdb.org/t/p/original";
const burl = "https://image.tmdb.org/t/p/dw500";

const Row = ({ title, url, isLarge }) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [Trailer, setTrailer] = useState("");

  useEffect(() => {
    async function fetch() {
      const res = await instance.get(url);
      setLoader(false);
      setData(res.data.results);
    }
    fetch();
  }, []);
  //console.log(data);
  const opts = {
    height: "190",
    width: "340",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handelClick = (movie) => {
    if (Trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.name || movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <section className={`loader&&${"color"}`}>
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
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="netflix">
          <h2>{title}</h2>
          <div className="poster">
            {data.map((movie) => {
              return (
                <img
                  onClick={() => handelClick(movie)}
                  className="img "
                  src={`${baseurl}${movie.poster_path}`}
                  key={movie.id}
                  alt={movie.name ? movie.name : movie.title}
                />
              );
            })}
          </div>
          {Trailer && <Youtube videoId={Trailer} opts={opts} />}
        </div>
      )}
    </section>
  );
};

export default Row;
