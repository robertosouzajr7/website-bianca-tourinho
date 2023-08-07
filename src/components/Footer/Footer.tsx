import React from "react";
import { BiArrowToTop } from "react-icons/bi";
import { animateScroll as scroll } from "react-scroll";
import { ContainerStyled } from "../../styles/global";
import Logo from "../../assets/logo-white-biatourinho.png";
import { FootStyled } from "./Style";
function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <ContainerStyled backgroundColor="#D3D3D3">
      <FootStyled>
        <nav>
          <img src={Logo} alt="Logo" />
          <p>Todos os Direitos Reservados</p>
          <a href="#">Rj Sistemas</a>
          <div>
            <BiArrowToTop onClick={scrollToTop} />
          </div>
        </nav>
      </FootStyled>
    </ContainerStyled>
  );
}

export default Footer;
