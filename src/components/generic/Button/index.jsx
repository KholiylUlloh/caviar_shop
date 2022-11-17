import React from "react";
import { Container } from "./style";
const Button = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  fontSize,
}) => {
  return (
    <Container
      children={children}
      height={height}
      onClick={onClick}
      type={type}
      width={width}
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      fontSize={fontSize}
    >
      {children}
    </Container>
  );
};

export default Button;
