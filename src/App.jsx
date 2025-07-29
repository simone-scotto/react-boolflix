import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { countries } from 'country-flag-icons'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
/* import Header from "./components/Header";
import Main from "./components/Main";
 */
function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const key = import.meta.env.VITE_API_KEY;

  const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`;

  function handleClickMovies(e) {
    e.preventDefault()
    
    
    fetch(urlMovies)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);  
        const filteredMovies = data.results
        setMovies(filteredMovies);
        console.log(filteredMovies);
              
      }); 
  }
  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="/Logo2.png"
                alt=""
                width="30"
                height="24"
                className="d-inline-block align-text-top logo"
              />
            </a>
            <form onSubmit={handleClickMovies} className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <button
                
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          <h2>Risultati</h2>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
          
            {movies.map((movie) => {
              
              return (
                <div key={movie.id} className="col">
                  <ul>
                    <li>{movie.title}</li>
                    <li>{movie.original_title}</li>
                    <li>{movie.original_language}
                      
                      <img className="flag" src={`https://unpkg.com/language-icons/icons/${movie.original_language}.svg`} alt="" />
                    
                    </li>
                    <li>{movie.vote_average}</li>
                  </ul>
                </div>
              )
            })}
          </div>
          
        </div>
      </main>
    </>
  );
}

export default App;
