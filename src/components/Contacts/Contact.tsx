import React from "react";
import { DivStyledMap } from "./Style";
import { BsTelephone, BsMailbox2, BsWhatsapp } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

function Contact() {
  const data = [
    {
      phone: "71 3215-9167",
      whatsApp: "71 9249-3821",
      email: "contato@biatourinho.com.br",
      adress: {
        rua: "Avenida Oceanica , Edif Centro Comercial Barra Center Loja 102",
        bairro: "Barra",
        number: "64",
        city: "Salvador",
        cep: "40140-130",
      },
    },
  ];
  return (
    <DivStyledMap id="contact">
      {data.map((item) => (
        <div className="div-contact">
          <h2>Fale conosco.</h2>
          <div className="div-phones">
            <span>
              <BsTelephone />
              {item.phone}
            </span>
            <span>
              <BsWhatsapp />
              {item.whatsApp}
            </span>
          </div>
          <h2>
            <BiMap />
            Localização.
          </h2>
          <div className="div-adress">
            <div className="adress">
              <p>
                {item.adress.rua}, {item.adress.bairro}, {item.adress.number},
                {item.adress.city}, {item.adress.cep}
              </p>
            </div>
          </div>
        </div>
      ))}
      ;{" "}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62198.46262470048!2d-38.60519605916216!3d-13.009930870783808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716036b0a655759%3A0x2f9c86a5aee73912!2sEscrit%C3%B3rio%20Bia%20Tourinho!5e0!3m2!1spt-PT!2sbr!4v1691126377721!5m2!1spt-PT!2sbr"
        loading="lazy"
        className="divMap"
      ></iframe>
    </DivStyledMap>
  );
}

export default Contact;
