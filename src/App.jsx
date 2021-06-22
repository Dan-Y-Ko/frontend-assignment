import styled from "styled-components";
import { useState, useEffect } from "react";

import useFetch from "./hooks/useFetch";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import Separator from "./components/Separator";
import MovieList from "./features/movies/MovieList";
import ModalPortal from "./components/ModalPortal";
import MovieDetailCard from "./components/MovieDetailCard";

const ContainerStyled = styled.div`
  height: 100vh;
  width: 83%;
  margin: auto;
`;

const HeaderContainerStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2%;
`;

const BottomSpacerStyled = styled.footer`
  margin-top: 100px;
`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const { response, error } = useFetch("movie/now_playing");

  useEffect(() => {
    setMovies(response);
  }, [response]);

  console.log(movie);

  return (
    <ContainerStyled>
      <HeaderContainerStyled>
        <Logo />
        <Searchbar />
      </HeaderContainerStyled>
      <Separator />
      <MovieList
        movies={movies}
        setMovie={setMovie}
        setModalVisible={setModalVisible}
      />
      {modalVisible && (
        <ModalPortal setModalVisible={setModalVisible}>
          <MovieDetailCard movie={movie} setModalVisible={setModalVisible} />
        </ModalPortal>
      )}
      <BottomSpacerStyled>&nbsp;</BottomSpacerStyled>
    </ContainerStyled>
  );
};

export default App;
