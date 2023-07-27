import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #d3d3d3;
  justify-content: center;
  box-sizing: border-box;

  .div-title {
    justify-content: center;
    width: 100%;
    display: flex;

    h2 {
      font-size: 40px;
      font-family: "Montserrat";
      font-weight: bold;
      color: #949494;
    }

    @media (max-width: 768px) {
      background-color: #949494;
    }
  }

  > section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    > .div-foto {
      display: flex;
      width: 50%;
      align-items: flex-end;
      justify-content: center;
      img {
        max-width: 500px;
        width: 100%;
        min-width: 200px;
        @media (max-width: 768px) {
          width: 100%;
        }
      }

      @media (max-width: 768px) {
        min-width: 320px;
        width: 100%;
        align-items: center;
        justify-content: center;
        display: inline-flex;
        background-color: #949494;
      }
    }

    > .div-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 50%;

      > h2 {
        display: flex;
        font-size: 60px;
        display: flex;
        flex-wrap: wrap;
        color: #949494;
      }

      > p {
        padding-right: 30px;
        font-size: 27px;
        font-family: "Source Sans Pro";
        color: #949494;
        text-align: justify;
        .div-button {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
          width: 100%;

          button {
            padding: 10px;
            font-size: 20px;
            height: 50px;
            background-color: #484848;
            color: white;
            border-radius: 6px;
            border: none;
            text-transform: uppercase;
            cursor: pointer;

            &:hover {
              background-color: #949494;
              cursor: pointer;
            }
          }
        }

        @media (max-width: 768px) {
          padding-right: 0px;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
      }

      @media (max-width: 768px) {
        padding: 0px 20px 0px 20px;
        align-items: center;
        width: 80%;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;
