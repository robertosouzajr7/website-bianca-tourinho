import React, { useState } from "react";
import { Cards, Container } from "../Projects/Style";
import { galeria } from "../../assets/fotos";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { SwiperOptions } from "swiper/types/swiper-options";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/thumbs";
import Modal from "../ModalPhoto/Modal";
function Projects() {
  const [selectImage, setSelectImage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  console.log(galeria);
  const HandleClick = (imageUrl: string) => {
    setSelectImage(imageUrl);
    setModalOpen(true);
  };

  const HandleCloseModal = () => {
    setModalOpen(false);
  };

  const getId = (id: string) => {
    console.log(id);
    localStorage.setItem("id", id);
  };

  const swiperRef = React.useRef<SwiperOptions & SwiperRef>(null);
  return (
    <Container id="projects">
      <div className="div-title">
        <h2>Projetos</h2>
      </div>
      <div className="section-projetos">
        <div className="div-carrosel">
          {galeria.map((foto) => (
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
