import { Col, Row } from "antd";
import MovieList from "../components/MovieList";
import SliderMovies from "../components/SliderMovies";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";
import { TOKEN_API, URL_API } from "../utils/constansts";

const options = {
  method: "GET",
  headers: {
    Authorization: TOKEN_API,
    accept: "application/json",
  },
};

export default () => {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?language=es-ES&page=1`,
    options
  );

  const popularMovies = useFetch(
    `${URL_API}/movie/popular?language=es-ES&page=1`,
    options
  );

  const topRateMovies = useFetch(
    `${URL_API}/movie/top_rated?language=es-ES&page=1`,
    options
  );

  return (
    <>
      <SliderMovies movies={newMovies}></SliderMovies>

      <Row>
        <Col span={12}>
          <MovieList
            title="Peliculas Populares"
            movies={popularMovies}
          ></MovieList>
        </Col>
        <Col span={12}>
          <MovieList
            title="Top Mejores Peliculas Puntuadas"
            movies={topRateMovies}
          ></MovieList>
        </Col>
      </Row>
      <Footer></Footer>
    </>
  );
};
