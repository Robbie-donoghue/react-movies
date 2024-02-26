import { Link } from "react-router-dom";
import "./moviecard.css";

export default function Movie({ movie }) {
  return (
    <Link to={`/movies/${movie.slug}`}>
      <div className="movieCard">
        <img src={movie.imageTag} alt="" className="movie-image" />
        <h4 className="txtf700">{movie.name}</h4>
        <div className="movie-detail-container">
          <p className="txtfsl">Release date: {movie.year}</p>
          <p className="txtfsl">Director: {movie.director}</p>
        </div>
      </div>
    </Link>
  );
}
