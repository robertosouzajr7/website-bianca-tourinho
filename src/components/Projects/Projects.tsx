import React, { useState } from "react";
import { Cards, Container } from "../Projects/Style";
import { galeria } from "../../assets/fotos";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/thumbs";
import { GrView } from "react-icons/gr";
import { Button, ModalStyled, StyledImage } from "../ModalPhoto/Style";
import Modal from "../ModalPhoto/Modal";

function Projects() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectImage, setSelectImage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const HandleClick = (imageUrl: string) => {
    setSelectImage(imageUrl);
    setModalOpen(true);
  };

  const HandleCloseModal = () => {
    setModalOpen(false);
  };

  const swiperRef = React.useRef<SwiperRef>(null);
  return (
    <Container>
      <div className="div-title">
        <h2>Projetos</h2>
      </div>
      <div className="section-projetos">
        <div className="div-carrosel">
          {galeria.map((foto) => (
            <Swiper
              SwiperRef={swiperRef}
              centeredSlides={true}
              spaceBetween={1}
              slidesPerView={"auto"}
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              className="capa-galeria"
            >
              <Cards>
                {foto.fotos.map((imagem) => (
                  <SwiperSlide>
                    <Cards onClick={() => HandleClick(imagem)}>
                      <img src={imagem} alt={imagem} />
                    </Cards>
                  </SwiperSlide>
                ))}
              </Cards>
            </Swiper>
          ))}
        </div>
      </div>
      {modalOpen && (
        <Modal HandleCloseModal={HandleCloseModal} selectImage={selectImage} />
      )}
    </Container>
  );
}

export default Projects;
