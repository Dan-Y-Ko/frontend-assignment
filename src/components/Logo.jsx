import styled from "styled-components";

import logo from "../images/logo.svg";

const LogoStyled = styled.img`
  height: 6vh;
`;

const Logo = () => {
  return <LogoStyled src={logo} alt="Timescale" />;
};

export default Logo;
