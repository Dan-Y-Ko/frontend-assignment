import styled from "styled-components";

const MovieCardStyled = styled.div`
  height: 348px;
  width: 100%;
  position: relative;
  background: ${(props) => props.theme.colors.bg.primary};
  border: 1px solid ${(props) => props.theme.colors.bg.secondary};
  border-radius: 8px;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const RatingBannerStyled = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  left: 15px;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.bg.primary};
  border: 1px solid ${(props) => props.theme.colors.text.primary};
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes[0]};
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

const MovieItem = ({ movie, setMovie, setModalVisible }) => {
  const { poster_path, title, vote_average } = movie;

  const handleClick = () => {
    setMovie(movie);
    setModalVisible(true);
  };

  return (
    <MovieCardStyled onClick={handleClick}>
      <RatingBannerStyled>{vote_average}</RatingBannerStyled>
      <CardImageStyled
        src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${poster_path}`}
        alt="poster_image"
      />
      <CardFooterStyled>{title}</CardFooterStyled>
    </MovieCardStyled>
  );
};

export default MovieItem;
