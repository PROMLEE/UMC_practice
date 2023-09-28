import movies from "./movieDummy.js";
import Movie from "./Components/Movie.jsx";
import "./index.css";

function App() {
  document.body.style.backgroundColor = "#22254b";
  document.body.style.padding = "auto";
  return (
    <div className="App">
      {movies.results.map((item) => {
        return (
          <Movie
            name={item.title}
            poster={item.poster_path}
            date={item.release_date}
          />
        );
      })}
    </div>
  );
}

export default App;
