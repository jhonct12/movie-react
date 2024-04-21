import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {
  URL_DETAILS,
  URL_IMAGES,
  URL_POSTER,
  URL_VIDEOS,
} from "../../utils/constansts";
import { optionsGet } from "../../utils/hpptOptions";
import Loading from "../../components/Loading";
import { Col, Row, Button } from "antd";

import "./movie.scss";
import moment from "moment";
import ModalVideo from "../../components/ModalVideo";
import { useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";

export default function Movie() {
  console.log("hola");

  const { id } = useParams();

  const { loading, result, error } = useFetch(URL_DETAILS(id), optionsGet);

  if (loading || !result) {
    return <Loading></Loading>;
  }

  return <RenderMovie movieInfo={result}></RenderMovie>;
}

const RenderMovie = ({
  movieInfo: { backdrop_path, poster_path, ...restMovie },
}) => {
  const backdropPath = URL_IMAGES + backdrop_path;

  return (
    <div
      className="movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="movie__dark">
        <Row>
          <Col span={8} offset={3} className="movie__poster">
            <PosterMovie posterPath={poster_path}></PosterMovie>
          </Col>
          <Col span={8} className="movie__info">
            <MovieInfo movieInfo={restMovie} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const PosterMovie = ({ posterPath }) => {
  const newPoster = URL_POSTER + posterPath;

  return (
    <div style={{ backgroundImage: `url('${newPoster}')` }}>hola mundo</div>
  );
};

const MovieInfo = ({
  movieInfo: { id, title, release_date, overview, genres },
}) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const videoMovie = useFetch(URL_VIDEOS(id), optionsGet);

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const renderVideo = () => {
    if (videoMovie.result) {
      if (videoMovie.result.results.length > 0) {
        return (
          <>
            <Button icon={<PlayCircleOutlined />} onClick={openModal}>
              Ver trailer
            </Button>
            {isOpenModal && (
              <ModalVideo
                videoKey={videoMovie.result.results[0].key}
                videoPlatform={videoMovie.result.results[0].site}
                isOpen={isOpenModal}
                close={closeModal}
              ></ModalVideo>
            )}
          </>
        );
      }
    }
  };

  return (
    <>
      <div className="movie__info-header">
        <h1>
          {title}
          <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
        </h1>
        {renderVideo()}
      </div>
      <div className="movie__info-content">
        <h3>General</h3>
        <p>{overview}</p>
        <h3>Generos</h3>
        <ul>
          {genres.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
