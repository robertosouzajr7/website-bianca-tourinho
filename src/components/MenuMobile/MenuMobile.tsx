import React, { useState } from "react";

import Container from "./Style";
import { MdOutlineClose } from "react-icons/md";
import { iHome } from "../../pages/home/Home";

function MenuMobile({ setVisibleMenu, visibleMenu }: iHome) {
  const menu = {
    Home: "Home",
    Projetos: "Projetos",
    Equipe: "Equipe",
    Contato: "Contato",
  };

  return (
    <Container isVisible={visibleMenu}>
      <MdOutlineClose size={45} onClick={() => setVisibleMenu(false)} />
      <nav>
        <ul>
          <li>
            <p>{menu.Home}</p>
          </li>
          <li>
            <p>{menu.Projetos}</p>
          </li>
          <li>
            <p>{menu.Equipe}</p>
          </li>
          <li>
            <p>{menu.Contato}</p>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default MenuMobile;
