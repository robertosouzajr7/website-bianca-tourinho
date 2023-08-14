import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
  box-sizing: border-box;

  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    box-sizing: border-box;

    ul {
      display: flex;
      list-style: none;
      justify-content: center;
      text-transform: uppercase;
      gap: 20px;
      margin: 0 auto;
      box-sizing: border-box;

      li {
        display: flex;
        margin: 0 auto;
        box-sizing: border-box;
        cursor: pointer;
        .active {
          font-family: "Montserrat";
          font-weight: 100;
          color: white;

          &:hover {
            font-weight: 600;
            transform: scale(1);
            transition: 0.3s;
          }
        }
      }
    }
  }

  .icone-hamburguer {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;

    svg {
      position: relative;
      right: 0px;
      left: 15%;
      size: 45;
      width: 100%;
    }
  }

  .mobile {
    display: none;
  }

  @media (max-width: 900px) {
    .mobile {
      display: flex;
      justify-content: center;
      padding: 0px;
      margin: 0 auto;
      box-sizing: border-box;
    }
    > nav {
      display: none;
    }
  }
`;

export default Container;
