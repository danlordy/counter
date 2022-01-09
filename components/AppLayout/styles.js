import { css } from "styled-jsx/css";
import { breakpoints, fonts, colors } from "../../styles/themes";
import { addOpacityToColor } from "../../styles/utils";

const blueColor = addOpacityToColor(colors.primary, 0.7);
const redColor = addOpacityToColor(colors.red, 0.7);

export const stylesGlobals = css.global`
  html,
  body {
    background-image: radial-gradient(${blueColor} 1px, transparent 0px),
      radial-gradient(${redColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  main {
    background-color: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

    max-width: ${breakpoints.md};
    height: 100%;
    min-width: 360px;
  }
`;
