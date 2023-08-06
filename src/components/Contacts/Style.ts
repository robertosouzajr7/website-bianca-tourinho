import { styled } from "styled-components";

export const DivStyledMap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    font-size: 30px;
    font-family: "Montserrat";
    color: #949494;
  }

  .div-contact {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 150px;
    color: #949494;

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;

      .div-phones {
        display: flex;
        width: 60%;
        justify-content: center;
        align-items: center;
        font-family: "Monteserrat";

        > span {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 15px;

          font-family: "Monteserrat";
        }
      }

      .div-adress {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > span {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-size: 30px;
        }

        > div {
          display: flex;
          gap: 10px;
        }
      }
    }
  }

  .divMap {
    width: 100%;
    height: 400px;
    border: none;
  }
`;
