import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/thumbs";
import { Button, MainComponent, ModalStyled, StyledImage } from "./Style";

interface GalleryProps {
  HandleCloseModal: () => void;
  selectImage: string;
  id: string;
  galeria: [];
}

const Modal: React.FC<GalleryProps> = ({
  HandleCloseModal,
  selectImage,
  id,
  galeria,
}) => {
  const swiperRef = React.useRef<SwiperRef>(null);
  const filterGalery = galeria.filter((item: any) => item.id === id);

  return (
    <MainComponent>
      {filterGalery.map((fotos: any) => (
        <ModalStyled>
          <Swiper
            ref={swiperRef}
            centeredSlides={true}
            spaceBetween={0}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="modal-container"
            zoom={true}
          >
            {fotos.fotos.map((item: any) => (
              <SwiperSlide>
                <Button onClick={HandleCloseModal}>Fechar</Button>
                <StyledImage src={item} alt=" Imagem selecionada" />
              </SwiperSlide>
            ))}
          </Swiper>
        </ModalStyled>
      ))}
    </MainComponent>
  );
};

export default Modal;
