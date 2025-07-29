import { useState } from "react";

export default function Header() {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");

  const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&query=${query}`;

  function handleClickMovies() {
    fetch(urlMovies)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="../../public/simonflixlogo.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top logo"
            />
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleClickMovies}
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
