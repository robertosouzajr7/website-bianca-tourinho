import React, { useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types/swiper-options";
import { Cards, Container } from "../../components/Projects/Style";
import "swiper/css/bundle";
import "swiper/css/thumbs";
import Modal from "../ModalPhoto/Modal";

const Residencial = ({ galeria }: any) => {
  const [selectImage, setSelectImage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState("");
  const swiperRef = React.useRef<SwiperOptions & SwiperRef>(null);

  const getId = (id: string) => {
    setId(id);
  };

  const HandleClick = (imageUrl: string) => {
    setSelectImage(imageUrl);
    setModalOpen(true);
  };

  const HandleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <div className="div-carrosel">
        {galeria.map((foto: any) => (
          <Swiper
            ref={swiperRef}
            centeredSlides={true}
            spaceBetween={1}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            className="capa-galeria"
            onClick={() => getId(foto.id)}
          >
            {foto.fotos.map((imagem: string) => (
              <SwiperSlide onClick={() => HandleClick(imagem)}>
                <Cards>
                  <img className="modal-foto" src={imagem} alt={imagem} />
                </Cards>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
        {modalOpen ? (
          <Modal
            HandleCloseModal={HandleCloseModal}
            selectImage={selectImage}
            id={id}
            galeria={galeria}
          />
        ) : null}
      </div>
    </Container>
  );
};

export default Residencial;
