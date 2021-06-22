import styled from "styled-components";

const MovieCardStyled = styled.div`
  height: 348px;
  width: 100%;
  background: ${(props) => props.theme.colors.bg.primary};
  border: 1px solid ${(props) => props.theme.colors.bg.secondary};
  border-radius: 8px;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
`;

const CardImageStyled = styled.img`
  height: 85%;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardFooterStyled = styled.div`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes[2]};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  margin-top: -4px;
`;

const MovieItem = ({ movie }) => {
  const { backdrop_path, title } = movie;
  console.log(movie);

  return (
    <MovieCardStyled>
      <CardImageStyled
        src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${backdrop_path}`}
        alt="backdrop_image"
      />
      <CardFooterStyled>{title}</CardFooterStyled>
    </MovieCardStyled>
  );
};

export default MovieItem;
