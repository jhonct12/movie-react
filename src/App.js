import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Movie from "./pages/movie";
import Error404 from "./pages/error404";
import MenuTop from "./components/MenuTop";
import NewMovie from "./pages/new-movie";

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <BrowserRouter>
        <Header style={{ zIndex: 1 }}>
          <MenuTop></MenuTop>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/new-movies" element={<NewMovie></NewMovie>}></Route>
            <Route path="/popular" element={<Popular></Popular>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>
            <Route path="/movie/:id" element={<Movie></Movie>}></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </Content>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
