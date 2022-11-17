import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "primary":
      return {
        border: "none",
        color: "#242424",
        background: "linear-gradient(180deg, #FFD692 23.18%, #F0B45B 107.92%)",
        borderRadius: "60px",
      };
    case "secondary":
      return {
        background: "#040404",
        color: "#FFFFFF;",
        border: "1px solid #C8A464",
        borderRadius: "60px",
        opacity: "0.7",
      };
    default:
      return {
        border: "1px solid #E6E9EC",
        color: "#FFFFFF",
      };
  }
};

const Container = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-size: ${({ fontSize }) => fontSize || "14px"};
  line-height: 17px;
  text-transform: uppercase;
  justify-content: center;
  letter-spacing: 0.1em;
  align-items: center;
  height: ${({ height }) => height || "44px"};
  min-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 2px;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.99);
    opacity: 0.7;
  }
`;
export { Container };
