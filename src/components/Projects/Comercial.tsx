import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types/swiper-options";
import { Cards, Container } from "./Style";
import "swiper/css/bundle";
import "swiper/css/thumbs";
import Modal from "../ModalPhoto/Modal";

const Comercial = ({ galeriaComercial }: any) => {
  const [selectImage2, setSelectImage2] = useState("");
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const swiperRef = React.useRef<SwiperOptions & SwiperRef>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const getId = (id: string) => {
    console.log(id);
    setId(id);
  };

  const HandleClick = (imageUrl: string) => {
    setSelectImage2(imageUrl);
    setModal(true);
  };

  const HandleCloseModal = () => {
    setModal(false);
  };

  return (
    <Container>
      {loading ? (
        <h2>Carregando</h2>
      ) : (
        <div className="div-carrosel">
          {galeriaComercial.map((foto: any) => (
            <Swiper
              ref={swiperRef}
              centeredSlides={true}
              spaceBetween={1}
              slidesPerView={"auto"}
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              className="capa-galeria"
              onClick={() => getId(foto.id)}
              autoHeight={true}
              zoom={true}
            >
              <h2>{foto.name}</h2>
              {foto.fotos.map((imagem: string) => (
                <SwiperSlide zoom={true} onClick={() => HandleClick(imagem)}>
                  <img src={imagem} alt={imagem} />
                </SwiperSlide>
              ))}
            </Swiper>
          ))}
          {modal ? (
            <Modal
              HandleCloseModal={HandleCloseModal}
              selectImage={selectImage2}
              id={id}
              galeria={galeriaComercial}
            />
          ) : null}
        </div>
      )}
    </Container>
  );
};

export default Comercial;
