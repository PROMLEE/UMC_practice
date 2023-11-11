import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Movie from "./pages/Movie.jsx";
import TV from "./pages/TV.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import movies from "./movieDummy.js";
import NotFound from "./pages/NotFound.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import styled from "styled-components";

const Appform = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 40px;
`;
function App() {
  document.body.style.margin = 0;
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Movie"
            element={
              <Appform>
                {movies.results.map((item) => {
                  return (
                    <Movie
                      name={item.title}
                      poster={item.poster_path}
                      date={item.release_date}
                      overview={item.overview}
                      id={item.id}
                    />
                  );
                })}
              </Appform>
            }
          />
          <Route path="/Movie/:name" element={<MovieDetail />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
