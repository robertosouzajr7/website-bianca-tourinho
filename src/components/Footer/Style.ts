import { styled } from "styled-components";

export const FootStyled = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  height: 100%;
  min-height: 250px;
  padding: 10px;
  background-color: #949494;
  color: #ffff;

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
