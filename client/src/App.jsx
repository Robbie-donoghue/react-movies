//import routes and pages
import { Route, Routes, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MovieGallery from "./pages/MovieGallery";
import { MovieDetails } from "./pages/MovieDetails";
import Directors from "./pages/Directors";

import "./app.css";

//app func
export default function App() {
  //return jsx
  return (
    <div>
      <nav>
        <h1>Postboxd movies</h1>
        <Link to="/home" className="txtfi">
          Home
        </Link>
        <Link to="/movies" className="txtfi">
          Movies
        </Link>
        <Link to="/directors" className="txtfi">
          Directors
        </Link>
      </nav>
      <Routes>
        <Route path="/movies" element={<MovieGallery />}></Route>
        <Route path="/movies:id" element={<MovieDetails />}></Route>
        <Route path="/directors" element={<Directors />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
