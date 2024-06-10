import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./HomePage.module.css";
import { axiosInit } from "../../Api.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosInit
      .get("/trending/movie/day")
      .then((response) => setMovies(response.data.results))
      .catch((error) =>
        console.error("Error fetching trending movies:", error)
      );
  }, []);

  return (
    <div className={css.contHomePage}>
      <h1 className={css.homePageTitle}>Trending Movies</h1>
      <MovieList movies={movies} className={css.contMovieList} />
    </div>
  );
};

export default HomePage;
