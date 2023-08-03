import React from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/thumbs";
import { Button, MainComponent, ModalStyled, StyledImage } from "./Style";
import { galeria } from "../../assets/fotos";

interface GalleryProps {
  HandleCloseModal: () => void;
  selectImage: string;
}

const Modal: React.FC<GalleryProps> = ({ HandleCloseModal, selectImage }) => {
  const swiperRef = React.useRef<SwiperRef>(null);

  const filterGalery = galeria.filter(
    (id) => id.id === localStorage.getItem("id")
  );

  console.log(filterGalery);

  return (
    <MainComponent>
      {filterGalery.map((fotos) => (
        <ModalStyled>
          <Swiper
            SwiperRef={swiperRef}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="modal-container"
          >
            {fotos.fotos.map((item) => (
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
