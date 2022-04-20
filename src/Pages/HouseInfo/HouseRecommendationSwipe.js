import React from "react";
import { Row } from "react-bootstrap";
import { Badge } from "@mantine/core";
import { Col } from "react-bootstrap";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import LuggageIcon from "@mui/icons-material/Luggage";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HouseRecommendation = () => {
  const content = useSelector((state) => state.buyInfoReducer);
  const { title, image, description, beds, showers, parking } = content;
  return (
    <div className="houseinfo__recommendation">
      <div style={{ fontSize: "20px", marginTop: "40px", textAlign: "left" }}>
        Recommended houses based on your preferences
      </div>
      <div className="recommendation__content">
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
            <SwiperSlide>
              <Col md={3}>
                <div className="rec__image">
                  <img src={image} alt="koonya pavillion" />
                </div>
                <div className="rec__content">
                  <h1>{title}</h1>

                  <p> {description}</p>
                  <div className="rec__items">
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {beds}
                    </Badge>
                    <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {showers}
                    </Badge>
                    <ShowerIcon className="rec__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {parking}
                    </Badge>
                    <LuggageIcon className="rec__icon" />
                  </div>
                </div>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col md={3}>
                <div className="rec__image">
                  <img src={image} alt="koonya pavillion" />
                </div>
                <div className="rec__content">
                  <h1>{title}</h1>

                  <p> {description}</p>
                  <div className="rec__items">
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {beds}
                    </Badge>
                    <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {showers}
                    </Badge>
                    <ShowerIcon className="rec__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {parking}
                    </Badge>
                    <LuggageIcon className="rec__icon" />
                  </div>
                </div>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col md={3}>
                <div className="rec__image">
                  <img src={image} alt="koonya pavillion" />
                </div>
                <div className="rec__content">
                  <h1>{title}</h1>

                  <p> {description}</p>
                  <div className="rec__items">
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {beds}
                    </Badge>
                    <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {showers}
                    </Badge>
                    <ShowerIcon className="rec__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {parking}
                    </Badge>
                    <LuggageIcon className="rec__icon" />
                  </div>
                </div>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col md={3}>
                <div className="rec__image">
                  <img src={image} alt="koonya pavillion" />
                </div>
                <div className="rec__content">
                  <h1>{title}</h1>

                  <p> {description}</p>
                  <div className="rec__items">
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {beds}
                    </Badge>
                    <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {showers}
                    </Badge>
                    <ShowerIcon className="rec__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {parking}
                    </Badge>
                    <LuggageIcon className="rec__icon" />
                  </div>
                </div>
              </Col>
            </SwiperSlide>
          </Swiper>
        </Row>
      </div>
    </div>
  );
};

export default HouseRecommendation;
