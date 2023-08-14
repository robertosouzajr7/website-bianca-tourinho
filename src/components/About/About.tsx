import React from "react";
import foto from "../../assets/bianca.png";
import { Container } from "./style";

function About() {
  return (
    <Container id="about">
      <section>
        <div className="div-title">
          <h2>Sobre Mim</h2>
        </div>
        <div className="div-foto">
          <img src={foto} alt="Foto Bianca Tourinho" />
        </div>
        <div className="div-text">
          <h5>Bianca Tourinho</h5>
          <p>
            Seja bem-vindo(a) à jornada pela arquitetura reimaginada através dos
            olhos visionários de Bianca Tourinho. Com uma paixão inigualável
            pela criação de ambientes que transcendem o ordinário, Bianca é uma
            profissional dedicada a transformar espaços em obras de arte
            funcionais. Cada projeto é uma história única esperando para ser
            contada. Bianca Tourinho acredita firmemente na poderosa influência
            que os espaços têm sobre as nossas vidas, emoções e interações. Com
            um olhar atento aos detalhes e uma capacidade excepcional de
            capturar a essência dos sonhos e necessidades de seus clientes, ela
            transforma ideias em realidade através de projetos arquitetônicos
            que são esteticamente impressionantes e funcionalmente eficazes.
          </p>
          <h5>Experiência e Inovação</h5>
          <p>
            Com anos de experiência no setor, Bianca combina habilidades
            clássicas com uma abordagem inovadora. Seja trabalhando em
            residências particulares, espaços comerciais ou projetos de design
            de interiores, ela tem a habilidade de fundir influências
            contemporâneas com elementos tradicionais, criando assim espaços
            intemporais que transcendem tendências passageiras. Cada projeto é
            uma oportunidade de criar algo verdadeiramente excepcional. Bianca
            Tourinho mantém um compromisso inabalável com a excelência, desde o
            primeiro rascunho até a entrega final. Cada detalhe é
            meticulosamente considerado, resultando em soluções arquitetônicas
            que refletem as aspirações e estilo de vida de seus clientes. Além
            de sua dedicação à arquitetura e ao design, Bianca tem um
            compromisso com a responsabilidade social. Ela está ativamente
            envolvida em projetos comunitários que buscam melhorar a qualidade
            de vida através do design acessível e sustentável.
          </p>
          <p>
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
