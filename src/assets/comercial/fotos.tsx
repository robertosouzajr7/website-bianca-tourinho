import { v4 as uuidv4 } from "uuid";

import { fotosComercialOsteon } from "./Clinica Osteon/fotos";
import { fotosComercialDzum } from "./Loja Dzum/fotos";
import { fotosComercialJardel } from "./Loja Jardel Abade/fotos";
import { fotosComercialThais } from "./Loja Thais Brito/fotos";

export const galeriaComercial = [
  { id: uuidv4(), fotos: fotosComercialOsteon, name: "Loja Osteon" },
  { id: uuidv4(), fotos: fotosComercialDzum, name: "Loja Dzum" },
  { id: uuidv4(), fotos: fotosComercialJardel, name: "Jardel" },
  { id: uuidv4(), fotos: fotosComercialThais, name: "Thais" },
];
