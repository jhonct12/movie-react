import { useState, useEffect } from "react";
import { URL_NOW_PLAYING } from "../utils/constansts";
import { optionsGet } from "../utils/hpptOptions";
import { Row, Col } from "antd";

import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";

import Pagination from "../components/Pagination";

export default function NewMovie() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(URL_NOW_PLAYING(page), optionsGet);

      const movies = await response.json();

      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Ultimos lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Row>
          <MovieCatalog movies={movieList.results}></MovieCatalog>
          <Col span="24">
            <Pagination
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePage={onChangePage}
            ></Pagination>
          </Col>
        </Row>
      ) : (
        <Col span="24">
          <Loading></Loading>
        </Col>
      )}

      <Col span={24}>
        <Footer></Footer>
      </Col>
    </Row>
  );
}
