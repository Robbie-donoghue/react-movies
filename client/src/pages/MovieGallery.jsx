import { useSearchParams, Link } from "react-router-dom";
import { movies } from "../stores/movies";
import Movie from "./Movie";

export default function MovieGallery() {
  console.log("component working");
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const sortType = searchParams.get("sort");
  //error handling
  console.log(sortType);
  //spread array
  const copy = [...movies];

  if (sortType == "asc") {
    //sort alphabetically
    copy.sort(handleSort);
  } else if (sortType === "desc") {
    //sort other way
    copy.sort(handleSort).reverse();
  }

  function handleSort(a, b) {
    //tim sort
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  //return jsx
  return (
    <div>
      <div className="sortButtons">
        <Link to="/movies?sort=asc">Sort Alphabetically</Link>
        <Link to="/movies?sort=desc">Sort in decending order</Link>
        <Link to="/movies">
          <Un-sort></Un-sort>
        </Link>
      </div>
      {/* .map this */}
      <div className="movie-container">
        {copy.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </div>
  );
}
