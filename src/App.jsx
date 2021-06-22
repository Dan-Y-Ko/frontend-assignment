import styled from "styled-components";
import { useState, useEffect } from "react";

import useFetch from "./hooks/useFetch";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import Separator from "./components/Separator";
import MovieList from "./features/movies/MovieList";
import ModalPortal from "./components/ModalPortal";
import MovieDetailCard from "./components/MovieDetailCard";
import Loading from "./components/Loading";
import Error from "./components/Error";

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
  const [searchResults, setSearchResults] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const { fetchData, response, loading, error } = useFetch();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchResults) {
        fetchData(`search/movie/?query=${searchResults}`);
        setMovies(response);
      } else {
        fetchData("movie/now_playing");
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  useEffect(() => {
    setMovies(response);
  }, [response]);

  const handleChange = (e) => {
    setSearchResults(e.target.value);
  };

  return (
    <ContainerStyled>
      <HeaderContainerStyled>
        <Logo />
        <Searchbar handleChange={handleChange} />
      </HeaderContainerStyled>
      <Separator />
      {loading && <Loading />}
      {error && <Error />}
      {!error && !loading && (
        <MovieList
          movies={movies}
          setMovie={setMovie}
          setModalVisible={setModalVisible}
        />
      )}
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
