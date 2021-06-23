import styled from "styled-components";

import MovieItem from "./MovieItem";

const TextStyled = styled.h3`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes[4]};
  margin-bottom: 2%;
`;

const MovieContainer = styled.section`
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  grid-template-rows: 348px;
  column-gap: 41px;
  row-gap: 27px;
`;

const MovieList = ({ movies, setMovie, setModalVisible }) => {
  const renderMovies = () => {
    if (!movies) return null;

    return movies.map((movie) => {
      if (movie.poster_path === null) {
        return null;
      } else {
        return (
          <MovieItem
            key={movie.id}
            movie={movie}
            setMovie={setMovie}
            setModalVisible={setModalVisible}
          />
        );
      }
    });
  };

  return (
    <main>
      <TextStyled>Most Recent Movies</TextStyled>
      <MovieContainer>{renderMovies()}</MovieContainer>
    </main>
  );
};

export default MovieList;
