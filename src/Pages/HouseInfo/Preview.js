import React from "react";
import { Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./HouseInfo.scss";
import { Center } from "@mantine/core";
import { useSelector } from "react-redux";

const Preview = () => {
  const content = useSelector((state) => state.buyInfoReducer);
  const { image } = content;
  return (
    <Container>
      <Row>
        <Swiper
          spaceBetween={100}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
        >
          <Center>
            <div className="preview__images">
              <SwiperSlide>
                <img
                  src={image}
                  alt="koonya pavillion"
                  className="preview__main__image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={image}
                  alt="koonya pavillion"
                  className="preview__main__image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={image}
                  alt="koonya pavillion"
                  className="preview__main__image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={image}
                  alt="koonya pavillion"
                  className="preview__main__image"
                />
              </SwiperSlide>
            </div>
          </Center>
        </Swiper>
      </Row>
    </Container>
  );
};

export default Preview;
