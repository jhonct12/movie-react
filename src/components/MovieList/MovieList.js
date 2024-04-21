import { Avatar, Button, List } from "antd";
import "./MovieList.scss";
import Loading from "../Loading";
import { URL_POSTER } from "../../utils/constansts";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

export default ({ movies: { loading, result, error }, title }) => {
  if (loading || !result) {
    return <Loading></Loading>;
  }

  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={result.results}
      renderItem={(movie) => <RenderMovie movie={movie}></RenderMovie>}
    ></List>
  );
};

const RenderMovie = ({ movie: { id, poster_path, title } }) => {
  const posterPath = URL_POSTER + poster_path;

  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath}></Avatar>}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      ></List.Item.Meta>
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightOutlined />}></Button>
      </Link>
    </List.Item>
  );
};
