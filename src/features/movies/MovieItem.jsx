import styled from "styled-components";

const MovieCard = styled.div`
  height: 348px;
  width: 100%;
  background: ${(props) => props.theme.colors.bg.primary};
  border: 1px solid ${(props) => props.theme.colors.bg.secondary};
  border-radius: 8px;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
`;

const MovieItem = ({ movies }) => {
  console.log(movies);

  return <MovieCard>asdad</MovieCard>;
};

export default MovieItem;
