import React from "react";
import Container from "./Style";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, animateScroll as scroll } from "react-scroll";
import { iHome } from "../../pages/home/Home";

function Menu({ setVisibleMenu }: iHome) {
  const data = {
    Home: "Home",
    Sobre: "Sobre",
    Projetos: "Projetos",
    Equipe: "Equipe",
    Contato: "Contato",
  };

  return (
    <Container>
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
