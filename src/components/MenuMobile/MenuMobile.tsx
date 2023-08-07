import React, { useState } from "react";

import Container from "./Style";
import { MdOutlineClose } from "react-icons/md";
import { iHome } from "../../pages/home/Home";
import { Link, animateScroll as scroll } from "react-scroll";

function MenuMobile({ setVisibleMenu, visibleMenu }: iHome) {
  const data = {
    Home: "Home",
    Sobre: "Sobre",
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
            <Link
              activeClass="active "
              to="/"
              className="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {data.Home}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active "
              to="about"
              className="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {data.Sobre}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active "
              to="projects"
              className="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {data.Projetos}{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active "
              to="team"
              className="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {data.Equipe}{" "}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active "
              to="contact"
              className="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {data.Contato}{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default MenuMobile;
