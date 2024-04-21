import { Row, Col, Input } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";

import "./search.scss";
import { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "../../hooks/withRouter";
import { URL_NOW_PLAYING, URL_SEARCH } from "../../utils/constansts";
import { optionsGet } from "../../utils/hpptOptions";

function Search({
  router: {
    location: { search },
    navigate,
  },
}) {
  const { s } = queryString.parseUrl(search).query;

  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState(s);

  useEffect(() => {
    (async () => {
      const response =
        searchValue == ""
          ? await fetch(URL_NOW_PLAYING(1), optionsGet)
          : await fetch(URL_SEARCH(s), optionsGet);
      const movies = await response.json();

      setMovieList(movies);
    })();
  }, [search]);

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(search);
    urlParams.s = e.target.value;
    navigate(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
    <Row>
      <Col span="12" offset="6" className="search">
        <h1>Busca tu pelicula</h1>
        <Input value={searchValue} onChange={onChangeSearch}></Input>
      </Col>
      {movieList.results && (
        <Row style={{ width: "100%" }}>
          <MovieCatalog movies={movieList.results}></MovieCatalog>
        </Row>
      )}
      <Col span="24">
        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default withRouter(Search);
