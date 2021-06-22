import styled from "styled-components";
import { useState, useEffect } from "react";

import useFetch from "./hooks/useFetch";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import Separator from "./components/Separator";
import MovieList from "./features/movies/MovieList";

const ContainerStyled = styled.div`
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
  const { response, error } = useFetch("movie/now_playing");

  useEffect(() => {
    setMovies(response);
  }, [response]);

  console.log(movies);

  return (
    <ContainerStyled>
      <HeaderContainerStyled>
        <Logo />
        <Searchbar />
      </HeaderContainerStyled>
      <Separator />
      <MovieList movies={movies} />
      <BottomSpacerStyled>&nbsp;</BottomSpacerStyled>
    </ContainerStyled>
  );
};

export default App;
