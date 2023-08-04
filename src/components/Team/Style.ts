import { styled } from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    h2 {
      font-size: 60px;
      font-family: "Montserrat";
      font-weight: bold;
      color: #949494;
    }
  }

  section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 250px;

        > img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: none;
          background-color: white;
          object-fit: cover;
        }

        > h2 {
          font-size: 18px;
          font-family: "Montserrat";
        }

        > span {
          font-size: 16px;
          font-weight: 400;
        }

        > p {
          text-align: justify;
          font-size: 12px;
        }
      }
    }
  }
`;
