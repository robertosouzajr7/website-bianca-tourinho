import React from "react";
import { ContainerStyled } from "../../styles/global";
import { DivStyled } from "./Style";
function Team() {
  const data = [
    {
      photo:
        "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
      name: "Diliane",
      postion: "Assistente",
      description:
        "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real",
    },
    {
      photo:
        "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
      name: "Diliane",
      postion: "Assistente",
      description:
        "lorem ipsum dA expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real",
    },
    {
      photo:
        "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
      name: "Diliane",
      postion: "Assistente",
      description:
        "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real",
    },
  ];
  return (
    <ContainerStyled backgroundColor="#d3d3d3" id="team">
      <DivStyled>
        <div className="div-title">
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
