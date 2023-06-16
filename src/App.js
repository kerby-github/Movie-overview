import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header'
import Home from './pages/home/home'
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header /> 
        <Routes>
          <Route path= "/" element= {<Home /> }/>
          <Route path= "movie/:id" element= {<Movie />}/>
          <Route path= "movies/:type" element= {<MovieList />}/>
          <Route path= "/*" element= {<h1>Error Page</h1>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
