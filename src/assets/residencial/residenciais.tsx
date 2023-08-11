import { fotosResidencialEnzoFernada } from "./Ap Enzo e Fernanda/fotos";
import { fotosResidencialHortoMarcio } from "./Ap Horto - Marcio/fotos";
import { fotosResidencialLeoeCamila } from "./Leo e Camila - Gourmet/fotos";
import { fotosResidencialLicia } from "./Ap Pituba - Licia/fotos";
import { fotosResidencialRonni } from "./Ap Vilas  -Ronni/fotos";
import { fotosResidencialSolar } from "./Ap Solar/fotos";
import { v4 as uuidv4 } from "uuid";

export const residenciais = [
  {
    id: uuidv4(),
    projeto01: fotosResidencialEnzoFernada,
  },
  {
    id: uuidv4(),
    projeto02: fotosResidencialHortoMarcio,
  },
  {
    id: uuidv4(),
    projeto03: fotosResidencialLeoeCamila,
  },
  {
    id: uuidv4(),
    projeto04: fotosResidencialLicia,
  },
  {
    id: uuidv4(),
    projeto05: fotosResidencialRonni,
  },
  {
    id: uuidv4(),
    projeto06: fotosResidencialSolar,
  },
];
