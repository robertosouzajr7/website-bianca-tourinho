import { styled } from "styled-components";

export const FootStyled = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;

  nav {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100%;

    gap: 20px;

    > img {
      width: 200px;
    }

    svg {
      cursor: pointer;
    }

    @media (max-width: 790px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
