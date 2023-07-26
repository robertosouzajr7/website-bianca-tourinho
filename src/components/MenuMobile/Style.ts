import { css, styled } from "styled-components";

const Container = styled.div<{ isVisible?: boolean }>`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8155637254901961) 86%
  );
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s linear;
  margin: 0 auto;
  box-sizing: border-box;
  color: white;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    right: 50%;
    left: 50%;
    top: 40px;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 15px;
    ul {
      position: relative;
      bottom: -100px;
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      list-style: none;
      justify-content: center;
      justify-items: center;
      align-items: center;
      text-transform: uppercase;
      margin-top: 100px;
      margin: 0 auto;
      gap: 2px;

      li {
        display: flex;
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
