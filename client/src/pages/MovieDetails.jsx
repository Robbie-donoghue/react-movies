import { Link, Navigate } from "react-router-dom";
import { findMovieBySlug } from "../stores/movies";
import { useParams, Outlet } from "react-router-dom";

export function MovieDetails() {
  const { id } = useParams;
  const movieInfo = findMovieBySlug(id);
  //error check
  console.log(movieInfo);
  //if no page found
  if (!movieInfo) {
    return <Navigate to="/not-found" replace={true} />;
  }
  //display details in jsx
  return (
    <div>
      <Outlet />
      <h2>Movie slug:{id}</h2>
      <p>{movieInfo.name}</p>
      <p>release date: {movieInfo.year}</p>
      <img src={movieInfo.imageTag} />
      <Link to="directors">
        <p>Director {movieInfo.director}</p>
      </Link>
    </div>
  );
}
