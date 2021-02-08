const api = "1ea88a53bc88f885ce1c82c639436583";

const request = {
  Trending: `/trending/all/day?api_key=${api}&language=en-US&video=true`,
  NetflixOriginals: `/discover/tv?api_key=${api}&with_network=213&video=true`,
  TopRated: `/movie/top_rated?api_key=${api}&language=en-US&video=true`,
  ActionMovies: `/discover/movie?api_key=${api}&with_genres=28&video=true`,
  CommedyMovies: `/discover/movie?api_key=${api}&with_genres=35&video=true`,
  HorrorMovies: `/discover/movie?api_key=${api}&with_genres=27&video=true`,
  RomanticMovies: `/discover/movie?api_key=${api}&with_genres=10749&video=true`,
  DocumentaryMovies: `/discover/movie?api_key=${api}&with_genres=99&video=true`,
};

export default request;
