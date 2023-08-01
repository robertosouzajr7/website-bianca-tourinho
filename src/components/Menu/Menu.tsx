import React from "react";
import Container from "./Style";
import { RxHamburgerMenu } from "react-icons/rx";
import { iHome } from "../../pages/home/Home";

function Menu({ setVisibleMenu }: iHome) {
  const data = {
    Home: "Home",
    Projetos: "Projetos",
    Equipe: "Equipe",
    Contato: "Contato",
  };

  return (
    <Container>
      <nav>
        <ul>
          <li>
            <p>{data.Home}</p>
          </li>
          <li>
            <p>{data.Projetos}</p>
          </li>
          <li>
            <p>{data.Equipe}</p>
          </li>
          <li>
            <p>{data.Contato}</p>
          </li>
        </ul>
      </nav>
      <div className="icone-hamburguer">
        <RxHamburgerMenu
          onClick={() => setVisibleMenu(true)}
          className="mobile"
          size={45}
        />
      </div>
    </Container>
  );
}

export default Menu;
