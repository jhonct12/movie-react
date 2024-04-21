import { Button, Carousel } from "antd";
import "./SliderMovies.scss";
import { URL_IMAGES } from "../../utils/constansts";
import { Link } from "react-router-dom";
import Loading from "../Loading";

export default ({ movies: { loading, result, error } }) => {
  if (loading || !result) {
    return <Loading></Loading>;
  }
  return (
    <Carousel autoplay className="slider-movies">
      {result.results.map((movie) => {
        return <Movie key={movie.id} movie={movie}></Movie>;
      })}
    </Carousel>
  );
};

const Movie = ({ movie: { id, backdrop_path, title, overview } }) => {
  const backdropPath = URL_IMAGES + backdrop_path;

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
