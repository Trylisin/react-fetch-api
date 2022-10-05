import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
import { useState, useEffect} from 'react'

// Add condition in JSX
// function App() {
//   const name = 'Lisin'
//   const isShowingName = true
//   return (
//     <div className="App">
//       <h1> Hello {isShowingName ? name : 'Someone'}</h1>
//     </div>
//   );
// }


// Show multi differrent tag in react
// function App() {
//   const name = 'Lisin'
  
//   return (
//     <>
//       <div className="App">
//         <h1> Hello {name}</h1>
        
//       </div>
//       <h2>Hahahhahahhaha</h2>
//       dsfsadfsd
//     </>
//   );
// }


// Using useState and useEffect
// import { useState, useEffect} from 'react'


// function App() {
//   const [Counter, setCounter] = useState(0)
//   let test = 'useEffect'
//   useEffect(() => alert("the counter is :" + Counter),[Counter])
  
//   return (
//     <>
//       <div className="App">
//         <br/>
//         <button onClick={() => setCounter((PrevCounter) => PrevCounter - 1)}> - </button>
//         <h1> {Counter} </h1>
//         <button onClick={ () => setCounter((PrevCounter) => PrevCounter+ 1)}> + </button>
//       </div>
//     </>
//   );
// }

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2cfe6157";

 const App = () => { 

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        
        const response = await fetch(`${API_URL}&s=${title}`);
        const data     = await response.json();
        setMovies(data.Search)
    }
    
    useEffect(() => {
        searchMovies("SuperMan");
    }, []);


    return (
        <div className='app'>
             <h1>MovieLand</h1>

            {/* Search input */}
             <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                    placeholder="Search for movies"
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {searchMovies(searchTerm)}}
                />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    )
}

export default App;
