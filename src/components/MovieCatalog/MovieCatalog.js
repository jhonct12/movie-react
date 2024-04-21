import { Col, Card } from "antd";

import { URL_POSTER } from "../../utils/constansts";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

import "./MovieCatalog.scss";

export default ({ movies }) => {
  return movies.map((movie) => (
    <Col span="24" key={movie.id} xs={4} className="movie-catalog">
      <MovieCard movie={movie}></MovieCard>
    </Col>
  ));
};

const MovieCard = ({ movie: { id, title, poster_path } }) => {
  const { Meta } = Card;
  const posterPath = URL_POSTER + poster_path;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={posterPath}></img>}
        actions={[<EyeOutlined />]}
      >
        <Meta title={title}></Meta>
      </Card>
    </Link>
  );
};
