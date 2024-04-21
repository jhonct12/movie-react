import "./MenuTop.scss";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default () => {
  const items = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "newMovies",
      label: <Link to="/new-movies">Ultimos lanzamientos</Link>,
    },
    {
      key: "popular",
      label: <Link to="/popular">Populares</Link>,
    },
    {
      key: "search",
      label: <Link to="/Search">Buscador</Link>,
    },
  ];

  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo></Logo>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
          items={items}
        ></Menu>
      </div>
    </div>
  );
};
