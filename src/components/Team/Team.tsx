import React from "react";
import { ContainerStyled } from "../../styles/global";
import { DivStyled } from "./Style";
function Team() {
  const data = [
    {
      photo: "http://www.foto.com",
      name: "Diliane",
      postion: "Assistente",
      description: "lorem ipsum d",
    },
    {
      photo: "http://www.foto.com",
      name: "Diliane",
      postion: "Assistente",
      description: "lorem ipsum d",
    },
    {
      photo: "http://www.foto.com",
      name: "Diliane",
      postion: "Assistente",
      description: "lorem ipsum d",
    },
  ];
  return (
    <ContainerStyled backgroundColor="#d3d3d3">
      <DivStyled>
        <div>
          <h2>Nossa Equipe</h2>
        </div>
        <section>
          <ul>
            {data.map((person) => (
              <li>
                <img
                  src={person.photo}
                  alt={`Imagem de perfil de ${person.name}`}
                />
                <h2>{person.name}</h2>
                <span>{person.postion}</span>
                <p>{person.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </DivStyled>
    </ContainerStyled>
  );
}

export default Team;
