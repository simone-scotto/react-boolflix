import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { countries } from 'country-flag-icons'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import StarRating from "./components/StarsRender";
/* import Header from "./components/Header";
import Main from "./components/Main";
 */
function App() {


  //usestate
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([])
  const [query, setQuery] = useState("");

  const key = import.meta.env.VITE_API_KEY;

  const urlTV = `https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${query}`

  const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`;


// handle events 
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

       fetch(urlTV)
      .then((res) => res.json()) 
      .then((data) => {
       const filteredTv = data.results
       setTvShows(filteredTv)
       console.log(filteredTv);
       

      });
    }


// tagliare la descrizione per farla entrare nella card

function tagliaDescrizione (text, maxWords) {
  const singoleParole = text.split(" ")
  const testoVisibile = singoleParole.slice(0, maxWords)
  return testoVisibile.join(" ")

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

          {/* FILM */}
          <section className="movies">
            <h2>Film</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            
              {movies.map((movie) => {
                
                return (
                  <div className="col" key={movie.id}>
                    
                      <div className="card h-100">
                        <img className="card-img" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="immagine non disponibile" />
                        <div className="card-img-overlay infos">
                          <h5 className="card-title">{movie.title}</h5>
                          <p className="card-text">Titolo Originale: {movie.original_title}</p>
                          <p className="card-text">Lingua Originale: {movie.original_language === "en" ? (
                          <img src="/flags/united-states-of-america-flag-3d-icon-16.png" alt="US" />
                          ) : movie.original_language === "fr" ? (
                            <img src="/flags/france-flag-3d-icon-16.png" alt="France" />
                          ) : movie.original_language === "ja" ? (
                            <img src="\flags\japan-flag-3d-icon-16 (1).png" alt="Japan" />
                          ): movie.original_language === "zh" ? (
                            <img src="\flags\china-flag-3d-icon-16.png" alt="China" />) : (
                            <img src="/flags/un-flag-3d-icon-16.png" alt="Unknown" />
                          )}</p>
                          <p className="card-text">Trama: {tagliaDescrizione(movie.overview, 50)} </p>                  
                          <StarRating voteAverage={movie.vote_average}/>

                        </div>
                          
                       
                      </div>
                    
                  </div>
                  
                )
              })}
            </div>
          </section>


          {/* SERIE TV */}
          <section className="tv">
            <h2>Serie TV</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            
              {tvShows.map((tvShow) => {
                
                return (
                  <div className="col" key={tvShow.id}>
                    
                      <div className="card h-100">
                        <img className="card-img" 

                        
                          src={tvShow.poster_path ? `https://image.tmdb.org/t/p/w342/${tvShow.poster_path}` : `/flags/anteprima-non-disponibile-2.jpg`}/>
                        <div className="card-img-overlay infos">
                          <h5 className="card-title">{tvShow.name}</h5>
                          <p className="card-text">Titolo Originale: {tvShow.original_name}</p>
                          <p className="card-text">Lingua Originale: {tvShow.original_language === "en" ? (
                          <img src="/flags/united-states-of-america-flag-3d-icon-16.png" alt="US" />
                          ) : tvShow.original_language === "fr" ? (
                            <img src="/flags/france-flag-3d-icon-16.png" alt="France" />
                          ) : tvShow.original_language === "ja" ? (
                            <img src="\flags\japan-flag-3d-icon-16 (1).png" alt="Japan" />
                          ): tvShow.original_language === "zh" ? (
                            <img src="\flags\china-flag-3d-icon-16.png" alt="China" />) : (
                            <img src="/flags/un-flag-3d-icon-16.png" alt="Unknown" />
                          )}</p>
                          <p className="card-text">Trama: {tagliaDescrizione(tvShow.overview, 50)}</p>                  
                          <StarRating voteAverage={tvShow.vote_average}/>

                        </div>
                      </div>
                    
                  </div>
                  
                )
              })}
            </div>
          </section>


          
        </div>
      </main>
    </>
  );
  
}

export default App;
