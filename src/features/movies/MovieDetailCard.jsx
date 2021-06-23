import styled from "styled-components";
import moment from "moment";

const MovieCardContainerStyled = styled.div`
  height: 50%;
  width: 40%;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const HeaderWrapperStyled = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const TitleTextStyled = styled.p`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin-left: 27px;
`;

const CloseIconWrapperStyled = styled.div`
  margin-right: 23px;
  cursor: pointer;
`;

const MainContentWrapperStyled = styled.main`
  height: 80%;
  width: 100%;
  display: flex;
  margin-top: 16px;
`;

const ImageStyled = styled.img`
  height: 100%;
  width: 45%;
  margin-left: 27px;
  margin-right: 22px;
`;

const TextContentWrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 27px;
`;

const ReleaseDateTextStyled = styled.div`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes[1]};
`;

const BoldTextStyled = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const OverviewTextStyled = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes[1]};
`;

const RatingTextStyled = styled.div`
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes[1]};
`;

const MovieDetailCard = ({ movie, setModalVisible }) => {
  const {
    title,
    backdrop_path,
    release_date,
    overview,
    vote_average,
    vote_count,
  } = movie;

  const formattedDate = moment(release_date).format("LL");

  return (
    <MovieCardContainerStyled onClick={(e) => e.stopPropagation()}>
      <HeaderWrapperStyled>
        <TitleTextStyled>{title}</TitleTextStyled>
        <CloseIconWrapperStyled onClick={() => setModalVisible(false)}>
          <i className="fa fa-window-close"></i>
        </CloseIconWrapperStyled>
      </HeaderWrapperStyled>
      <MainContentWrapperStyled>
        <ImageStyled
          src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${backdrop_path}`}
        />
        <TextContentWrapperStyled>
          <ReleaseDateTextStyled>
            <BoldTextStyled>Release Date:</BoldTextStyled> {formattedDate}
          </ReleaseDateTextStyled>
          <OverviewTextStyled>{overview}</OverviewTextStyled>
          <RatingTextStyled>
            <BoldTextStyled>{vote_average}</BoldTextStyled> / 10 ({vote_count}{" "}
            total votes)
          </RatingTextStyled>
        </TextContentWrapperStyled>
      </MainContentWrapperStyled>
    </MovieCardContainerStyled>
  );
};

export default MovieDetailCard;
