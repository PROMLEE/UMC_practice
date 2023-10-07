import * as Mstyle from "./Movie.style";
function Movie({ name, poster, date }) {
  return (
    <Mstyle.Wrapper>
      <Mstyle.Poster
        alt={name + " poster"}
        src={"https://www.themoviedb.org/t/p/original/" + poster}
      ></Mstyle.Poster>
      <Mstyle.Info>
        <Mstyle.Namebox>{name}</Mstyle.Namebox>
        <Mstyle.Date>
          {Number(date.substr(5, 2))}.{Number(date.substr(8, 2))}
        </Mstyle.Date>
      </Mstyle.Info>
    </Mstyle.Wrapper>
  );
}

export default Movie;
