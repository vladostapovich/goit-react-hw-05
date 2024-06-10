import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DEFAULT_IMAGE, IMAGE_BASE_URL, axiosInit } from "../../Api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    axiosInit
      .get(`/movie/${movieId}/credits`)
      .then((response) => setCast(response.data.cast))
      .catch((error) => console.error("Error fetching movie cast:", error));
  }, [movieId]);

  if (cast.length === 0) {
    return <p>We do not have any cast information for this movie</p>;
  }

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${actor.profile_path}`
                  : DEFAULT_IMAGE
              }
              alt={actor.name}
              width={100}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
            {actor.profile_path ? null : <p>Photo not available</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
