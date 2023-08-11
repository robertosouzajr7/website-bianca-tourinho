import React, { useState } from "react";
import { Container } from "../Projects/Style";
import { galeria } from "../../assets/fotos";
import { galeriaComercial } from "../../assets/comercial/fotos";
import "swiper/css/bundle";
import "swiper/css/thumbs";
import Residencial from "./Residenciais";
import Comercial from "./Comercial";
function Projects() {
  const [select, setSelect] = useState(true);
  return (
    <Container id="projects">
      <div className="div-title">
        <h2>Projetos</h2>
        <div className="div-buttons">
          <button onClick={() => setSelect(true)}>Residencial</button>
          <button onClick={() => setSelect(false)}>Comercial</button>
        </div>
      </div>
      <div className="section-projetos">
        {select ? (
          <Residencial galeria={galeria} />
        ) : (
          <Comercial galeriaComercial={galeriaComercial} />
        )}
      </div>
    </Container>
  );
}

export default Projects;
