import { styled } from "styled-components";

export const LogoStyled = styled.figure`
  display: flex;
  img {
    min-width: 70px;
    max-width: 180px;
    width: 100%;
  }
`;

export const MainStyled = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  z-index: 4;
  background-color: transparent;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8155637254901961) 86%
  );
  width: 100%;
  height: 114px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
`;
