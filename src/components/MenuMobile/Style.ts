import { css, styled } from "styled-components";

const Container = styled.div<{ isVisible?: boolean }>`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background: white;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s linear;
  margin: 0 auto;
  box-sizing: border-box;

  svg {
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      list-style: none;
      justify-content: center;
      justify-items: center;
      text-transform: uppercase;
      margin-top: 50px;
      gap: 2px;

      li {
        width: 100%;
        cursor: pointer;
        p {
          font-family: "Montserrat";

          &hover {
            font-weight: bold;
          }
        }
      }
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `};

  transform: translateY(0px);

  svg {
    transform: rotate(0deg);
  }
`;

export default Container;
