import { v4 as uuidv4 } from "uuid";

import foto1 from "./slide1.jpg";
import foto2 from "./slide2.jpg";
import foto3 from "./slide3.jpg";
import foto4 from "./slide4.jpg";
import foto5 from "./slide5.jpg";
import foto6 from "./slide6.jpg";
import { residenciais } from "./residencial/residenciais";
import { fotosResidencialEnzoFernada } from "./residencial/Ap Enzo e Fernanda/fotos";
import { fotosResidencialHortoMarcio } from "./residencial/Ap Horto - Marcio/fotos";
import { fotosResidencialLeoeCamila } from "./residencial/Leo e Camila - Gourmet/fotos";
import { fotosResidencialLicia } from "./residencial/Ap Pituba - Licia/fotos";
import { fotosResidencialRonni } from "./residencial/Ap Vilas  -Ronni/fotos";
import { fotosResidencialSolar } from "./residencial/Ap Solar/fotos";
export const fotos = [foto1, foto2, foto3, foto4, foto5, foto6];

export const galeria = [
  { id: uuidv4(), fotos: fotosResidencialEnzoFernada, name: "Enzo e Fernanda" },
  { id: uuidv4(), fotos: fotosResidencialHortoMarcio, name: "Horto" },
  { id: uuidv4(), fotos: fotosResidencialLeoeCamila, name: "Leo & Camila" },
  { id: uuidv4(), fotos: fotosResidencialLicia, name: "Licia" },
  { id: uuidv4(), fotos: fotosResidencialRonni, name: "Ronni" },
  { id: uuidv4(), fotos: fotosResidencialSolar, name: "Solar" },
];
