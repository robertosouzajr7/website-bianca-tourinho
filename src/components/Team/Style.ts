import { styled } from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 30px;

  .div-title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    box-sizing: border-box;

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
    box-sizing: border-box;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0px 10px 0px;
      width: 100%;
      gap: 10px;
      box-sizing: border-box;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 300px;
        box-sizing: border-box;

        > img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: none;
          background-color: white;
          object-fit: cover;
          box-sizing: border-box;
        }

        > h2 {
          font-size: 18px;
          font-family: "Montserrat";
          color: #949494;
        }

        > span {
          font-size: 16px;
          font-weight: 400;
          color: #949494;
        }

        > p {
          text-align: justify;
          font-size: 12px;
          padding: 0px 30px 0px 30px;
          margin: 0px;
          box-sizing: border-box;
          color: #949494;
        }

        @media (max-width: 790px) {
          display: flex;
          flex-direction: column;
          min-width: 300px;
          box-sizing: border-box;
        }
      }

      @media (max-width: 790px) {
        display: flex;
        width: 300px;
        overflow-x: auto;
        justify-content: flex-start;
        box-sizing: border-box;
      }
    }

    @media (max-width: 790px) {
      display: flex;
      width: 100%;
      box-sizing: border-box;
    }
  }
`;
