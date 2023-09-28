import "../index.css";
function Movie(props) {
  return (
    <span className="wrapper">
      <img
        alt={props.name + " poster"}
        className="poster"
        src={"https://www.themoviedb.org/t/p/original/" + props.poster}
      ></img>
      <div className="info">
        <span className="namebox">{props.name}</span>
        <span className="date">
          {Number(props.date.substr(5, 2))}.{Number(props.date.substr(8, 2))}
        </span>
      </div>
    </span>
  );
}

export default Movie;
