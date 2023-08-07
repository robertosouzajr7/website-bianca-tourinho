import React from "react";
import foto from "../../assets/bianca.png";
import { Container } from "./style";

function About() {
  return (
    <Container id="about">
      <div className="div-title">
        <h2>Sobre Mim</h2>
      </div>
      <section>
        <div className="div-foto">
          <img src={foto} alt="Foto Bianca Tourinho" />
        </div>
        <div className="div-text">
          <h2>Bianca Tourinho</h2>
          <p>
            é simplesmente uma simulação de texto da indústria tipográfica e de
            impressos, e vem sendo utilizado desde o século XVI, quando um
            impressor desconhecido pegou uma bandeja de tipos e os embaralhou
            para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não
            só a cinco séculos, como também ao salto para a editoração
            eletrônica, permanecendo essencialmente inalterado. Se popularizou
            na década de 60, quando a Letraset lançou decalques contendo
            passagens de Lorem Ipsum, e mais recentemente quando passou a ser
            integrado a softwares de editoração eletrônica como Aldus PageMaker
            <div className="div-button">
              <button type="button">Falar com a Bia</button>
            </div>
          </p>
        </div>
      </section>
    </Container>
  );
}

export default About;
