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
  background-color: black;
  width: 100%;
  height: 114px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
`;
