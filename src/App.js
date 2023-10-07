import movies from "./movieDummy";
import Movie from "./Components/Movie/Movie";
import * as Astyle from "./App.style";

function App() {
  document.body.style.backgroundColor = "#22254b";
  document.body.style.padding = "auto";
  return (
    <Astyle.App>
      {movies.results.map(({ title, poster_path, release_date }) => {
        return <Movie name={title} poster={poster_path} date={release_date} />;
      })}
    </Astyle.App>
  );
}

export default App;
