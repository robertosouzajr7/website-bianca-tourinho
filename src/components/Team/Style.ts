import { styled } from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .div-title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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
      padding: 10px 0px 10px 0px;
      width: 100%;
      gap: 10px;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 300px;

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
          padding: 0px 30px 0px 30px;
        }

        @media (max-width: 790px) {
          display: flex;
          flex-direction: column;
          min-width: 350px;
        }
      }

      @media (max-width: 790px) {
        display: flex;
        width: 400px;
        overflow-x: auto;
        justify-content: flex-start;
      }
    }

    @media (max-width: 790px) {
      display: flex;
      width: 100%;
    }
  }
`;
