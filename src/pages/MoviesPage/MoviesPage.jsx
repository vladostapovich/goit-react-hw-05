import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import css from "./MoviesPage.module.css";

import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { axiosInit } from "../../Api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");

    if (query) {
      axiosInit
        .get(`/search/movie?query=${query}`)
        .then((response) => setMovies(response.data.results))
        .catch((error) => console.error("Error searching movies:", error));
    }
  }, [location.search]);

  return (
    <div>
      <h1 className={css.moviesSearch}>Search Movies</h1>
      <SearchForm />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
