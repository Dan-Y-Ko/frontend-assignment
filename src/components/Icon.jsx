import styled from "styled-components";

import logo from "../images/logo.svg";
import closeIcon from "../images/close-icon.svg";

const iconVariant = {
  timescale: logo,
  closeIcon,
};

const getIconSource = (icon) => iconVariant[icon];

const IconStyled = styled.img((props) => props.styles);

export const Icon = ({ styles, icon, alt }) => {
  const iconSource = getIconSource(icon);
  return <IconStyled styles={styles} src={iconSource} alt={alt} />;
};
