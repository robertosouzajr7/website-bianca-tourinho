import React from "react";

import { Button, ModalStyled, StyledImage } from "./Style";

interface GalleryProps {
  HandleCloseModal: () => void;
  selectImage: string;
}

const Modal: React.FC<GalleryProps> = ({ HandleCloseModal, selectImage }) => {
  return (
    <ModalStyled>
      <Button onClick={HandleCloseModal}>Fechar</Button>
      <StyledImage src={selectImage} alt=" Imagem selecionada" />
    </ModalStyled>
  );
};

export default Modal;
