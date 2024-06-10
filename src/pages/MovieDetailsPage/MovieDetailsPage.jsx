import { useEffect, useState } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";

import css from "./MovieDetailsPage.module.css";
import { DEFAULT_IMAGE, IMAGE_BASE_URL, axiosInit } from "../../Api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? "/movies";

  useEffect(() => {
    axiosInit
      .get(`/movie/${movieId}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, poster_path, overview, genres, release_date, vote_average } =
    movie;
  const poster = poster_path
    ? `${IMAGE_BASE_URL}${poster_path}`
    : DEFAULT_IMAGE;

  return (
    <div>
      <Link to={backLink}>Go back</Link>
      <h1>{title}</h1>
      <div className={css.container}>
        <img src={poster} alt={title} />
        <div>
          <ul className={css.infoItem}>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p className={css.infoStrong}>{overview}</p>
          <div>
            <p className={css.infoStrong}>
              <strong>Release Date:</strong> {release_date}
            </p>
            <p className={css.infoStrong}>
              <strong>Rating:</strong> {vote_average}
            </p>
          </div>
        </div>
      </div>

      <ul className={css.links}>
        <li>
          <Link to="cast" state={{ from: backLink }} className={css.linkTo}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLink }} className={css.linkTo}>
            Reviews
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
