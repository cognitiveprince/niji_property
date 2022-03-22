import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EmailIcon from "@mui/icons-material/Email";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import LuggageIcon from "@mui/icons-material/Luggage";
import ShowerIcon from "@mui/icons-material/Shower";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import KitchenIcon from "@mui/icons-material/Kitchen";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CircleIcon from "@mui/icons-material/Circle";
import EastIcon from "@mui/icons-material/East";
import { ScrollArea } from "@mantine/core";
import { Badge } from "@mantine/core";

import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import "./HouseInfo.scss";

const HouseInfo = () => {
  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          {/* Image Section Of The Page */}
          <Col md={6} className="houseinfo__main__image">
            <img
              src={require("../../Assets/houseinfo_1.png")}
              alt="koonya pavillion"
            />
          </Col>
          <Col md={2} className="houseinfo__second__image">
            <img
              src={require("../../Assets/houseinfo_2.png")}
              alt="koonya pavillion"
            />
            <img
              src={require("../../Assets/houseinfo_3.png")}
              alt="koonya pavillion"
              style={{ marginTop: "10px", borderRadius: "0 0 10px 0" }}
            />
            <div className="d-grid gap-2">
              <Button variant="outline-dark" size="lg">
                See all
              </Button>
            </div>
          </Col>
          <Col>
            {/* Image Section Of The Page Ends */}

            {/* Card Section */}
            <div className="houseinfo__card">
              {/* Title Section of The Card */}
              <div className="card__title">
                <Row>
                  <Col md={4}>
                    <div className="card__title__left">Description</div>
                  </Col>
                  <Col md={{ span: 4, offset: 4 }}>
                    <div className="card__title__right">
                      <div>3.8</div>
                      <div>
                        <StarBorderIcon />
                      </div>
                      <div>
                        <FileUploadIcon />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* Title Section Ends */}

              {/* Profile Section Of The Card */}
              <div className="card__profile">
                <div className="card__profile__image">
                  <img
                    src={require("../../Assets/houseinfo_4.png")}
                    alt="koonya pavillion"
                  />
                </div>

                <div className="card__profile__info">
                  <p>Seller</p>
                  <h3>Yuna Evergarden</h3>
                </div>
              </div>
              {/* Profile Section Ends */}

              {/* Contact Info Section */}
              <div className="card__contact">
                <div className="card__contact__title">Contact Information</div>
                <div className="card__contact__info">
                  <LocalPhoneIcon />
                  <h6>+977 9810283946</h6>
                </div>
                <div className="card__contact__info">
                  <ChatBubbleIcon />
                  <h6>+977 9810784635</h6>
                </div>
                <div className="card__contact__info">
                  <EmailIcon />
                  <h6>nijiproperty1265@gmail.com</h6>
                </div>
                <div
                  className="card__contact__info"
                  style={{ borderBottom: "none" }}
                >
                  <MoreHorizIcon />
                  <h6>Contract</h6>
                </div>
              </div>
              {/* Contact Info Section Ends */}

              {/* Offer Section Starts */}
              <div className="card__offer">
                {/* offer title */}
                <div className="card__offer__title">
                  <Row>
                    <Col md={4}>
                      <div>House Offers</div>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                      <div style={{ color: "#0085E6", fontWeight: "200" }}>
                        Show More{" "}
                        <ChevronRightIcon style={{ color: "black" }} />
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* offer title ends */}

                {/* offer info */}
                <div className="card__offer__info">
                  <Row>
                    <Col>
                      <div>
                        <SingleBedIcon /> 3 bedrooms
                      </div>
                    </Col>
                    <Col>
                      <LuggageIcon /> 1,501 sqft
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <ShowerIcon /> 2 washrooms
                      </div>
                    </Col>
                    <Col>
                      <DirectionsCarIcon /> Parking space
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <KitchenIcon /> 1 kitchen
                      </div>
                    </Col>
                    <Col>
                      <EventNoteIcon /> Built year - 2016
                    </Col>
                  </Row>
                </div>
                {/* offer info ends */}

                {/* offer button */}
                <div className="card__offer__button">
                  <Row>
                    <Col md={6}>
                      <Button variant="primary" size="lg">
                        Buy now
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button variant="success" size="lg">
                        Take a tour
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
              {/* offer button ends */}
            </div>
          </Col>

          {/* House info text  */}

          <div className="houseinfo__main__title">
            <Col md={8}>
              <div className="houseinfo__text">
                <h1>Rs. 10,00,00,000</h1>
                <h2>An Inimitable Experience of Place - Koonya Pavilion</h2>
                <p>Baluwatar, Kathmandu, Nepal</p>
              </div>
              <div>
                <p>
                  The pavilion is intended as a place separate from the main
                  house, which was also designed by Room11, dedicated to
                  creative practice, where the client can retreat to find
                  inspiration and solace in nature. It was the kind of project,
                  therefore, that required an especially strong rapport between
                  architect and client – its success dependent less on the
                  response to a typical brief and more on an alignment of
                  intellectual and artistic interests and, above all, a shared
                  affinity with the landscape
                </p>
              </div>
              <div style={{ float: "right", color: "#0900EA" }}>Learn More</div>
            </Col>
          </div>

          {/* House info text ends */}

          {/* House Info Map */}

          <div className="houseinfo__map">
            <Button variant="primary" size="lg">
              House Location , Map View
            </Button>
            <div style={{ textAlign: "center" }}>
              <iframe
                src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="1479"
                height="888"
                frameBorder="0"
                style={{ border: 0, marginTop: "40px" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="map"
              ></iframe>
            </div>
          </div>

          {/* House Info Map Ends */}

          {/* House Info Comments */}

          <div className="houseinfo__comments" style={{ width: "96%" }}>
            <div style={{ fontSize: "30px", textAlign: "left" }}>Comments</div>

            <div className="houseinfo__comments__container">
              <ScrollArea style={{ height: "250px" }}>
                {/* HTML FOR THE COMMENTS VISUAL  */}
                <div className="houseinfo__comments__content">
                  <div className="comments__user">
                    <div className="comments__user__icon">
                      <CircleIcon
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "#f27000",
                        }}
                      />
                    </div>
                    <div className="comments__user__text">
                      Would love to visit the house this Saturday, can I ?
                    </div>
                    <Badge
                      style={{ backgroundColor: "#217FC4", color: "white" }}
                    >
                      Raju thapa
                    </Badge>
                  </div>

                  <div className="comments__admin">
                    <div className="comments__admin__icon">
                      <EastIcon
                        style={{
                          width: "50px",
                          height: "16px",
                          color: "#353DFC",
                        }}
                      />
                    </div>
                    <div className="comments__admin__text">
                      Sorry, we are closed on Saturday.
                    </div>
                  </div>
                </div>
                {/* HTML FOR THE COMMENTS VISUAL ENDS HERE */}

                {/* HTML FOR THE COMMENTS VISUAL  */}
                <div className="houseinfo__comments__content">
                  <div className="comments__user">
                    <div className="comments__user__icon">
                      <CircleIcon
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "#f27000",
                        }}
                      />
                    </div>
                    <div className="comments__user__text">
                      Would love to visit the house this Saturday, can I ?
                    </div>
                    <Badge
                      style={{ backgroundColor: "#E85836", color: "white" }}
                    >
                      Aadish Gurung
                    </Badge>
                  </div>

                  <div className="comments__admin">
                    <div className="comments__admin__icon">
                      <EastIcon
                        style={{
                          width: "50px",
                          height: "16px",
                          color: "#353DFC",
                        }}
                      />
                    </div>
                    <div className="comments__admin__text">
                      Sorry, we are closed on Saturday.
                    </div>
                  </div>
                </div>
                {/* HTML FOR THE COMMENTS VISUAL ENDS HERE */}

                {/* HTML FOR THE COMMENTS VISUAL  */}
                <div className="houseinfo__comments__content">
                  <div className="comments__user">
                    <div className="comments__user__icon">
                      <CircleIcon
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "#f27000",
                        }}
                      />
                    </div>
                    <div className="comments__user__text">
                      Would love to visit the house this Saturday, can I ?
                    </div>
                    <Badge
                      style={{ backgroundColor: "#217FC4", color: "white" }}
                    >
                      Saurav Shrestha
                    </Badge>
                  </div>

                  <div className="comments__admin">
                    <div className="comments__admin__icon">
                      <EastIcon
                        style={{
                          width: "50px",
                          height: "16px",
                          color: "#353DFC",
                        }}
                      />
                    </div>
                    <div className="comments__admin__text">
                      Sorry, we are closed on Saturday.
                    </div>
                  </div>
                </div>
                {/* HTML FOR THE COMMENTS VISUAL ENDS HERE */}

                {/* HTML FOR THE COMMENTS VISUAL  */}
                <div
                  className="houseinfo__comments__content"
                  style={{ borderBottom: 0 }}
                >
                  <div className="comments__user">
                    <div className="comments__user__icon">
                      <CircleIcon
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "#f27000",
                        }}
                      />
                    </div>
                    <div className="comments__user__text">
                      Would love to visit the house this Saturday, can I ?
                    </div>
                    <Badge
                      style={{ backgroundColor: "#AB21C4", color: "white" }}
                    >
                      Zara Kc
                    </Badge>
                  </div>

                  <div className="comments__admin">
                    <div className="comments__admin__icon">
                      <EastIcon
                        style={{
                          width: "50px",
                          height: "16px",
                          color: "#353DFC",
                        }}
                      />
                    </div>
                    <div className="comments__admin__text">
                      Sorry, we are closed on Saturday.
                    </div>
                  </div>
                </div>
                {/* HTML FOR THE COMMENTS VISUAL ENDS HERE */}
              </ScrollArea>
            </div>

            <div className="houseinfo__comments__button">
              <Button
                variant="outline-dark"
                size="lg"
                style={{
                  float: "right",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                ASK QUESTION
              </Button>
            </div>
          </div>

          {/* House Info Comments Ends Here */}

          {/* House Info Recommendation Starts */}
          <div className="houseinfo__recommendation">
            <div
              style={{ fontSize: "25px", marginTop: "40px", textAlign: "left" }}
            >
              Recommended houses based on your preferences
            </div>
            <div className="recommendation__content">
              <Row>
                <Col>
                  <div className="rec__image">
                    <img
                      src={require("../../Assets/first_prop.png")}
                      alt="koonya pavillion"
                    />
                  </div>
                  <div className="rec__content">
                    <h1>Koonya Pavilion</h1>

                    <p> Baluwatar , Kathmandu, Nepal</p>
                    <div className="rec__items">
                      <div className="rec__count" style={{ marginLeft: "0px" }}>
                        3
                      </div>
                      <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                      <div className="rec__count">4</div>
                      <ShowerIcon className="rec__icon" />
                      <div className="rec__count__lug">1,505</div>
                      <LuggageIcon className="rec__icon" />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="rec__image">
                    <img
                      src={require("../../Assets/second_prop.png")}
                      alt="koonya pavillion"
                    />
                  </div>
                  <div className="rec__content">
                    <h1>Koonya Pavilion</h1>

                    <p> Baluwatar , Kathmandu, Nepal</p>
                    <div className="rec__items">
                      <div className="rec__count" style={{ marginLeft: "0px" }}>
                        3
                      </div>
                      <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                      <div className="rec__count">4</div>
                      <ShowerIcon className="rec__icon" />
                      <div className="rec__count__lug">1,505</div>
                      <LuggageIcon className="rec__icon" />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="rec__image">
                    <img
                      src={require("../../Assets/third_prop.png")}
                      alt="koonya pavillion"
                    />
                  </div>
                  <div className="rec__content">
                    <h1>Koonya Pavilion</h1>

                    <p> Baluwatar , Kathmandu, Nepal</p>
                    <div className="rec__items">
                      <div className="rec__count" style={{ marginLeft: "0px" }}>
                        3
                      </div>
                      <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                      <div className="rec__count">4</div>
                      <ShowerIcon className="rec__icon" />
                      <div className="rec__count__lug">1,505</div>
                      <LuggageIcon className="rec__icon" />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="rec__image">
                    <img
                      src={require("../../Assets/4_prop.png")}
                      alt="koonya pavillion"
                    />
                  </div>
                  <div className="rec__content">
                    <h1>Koonya Pavilion</h1>

                    <p> Baluwatar , Kathmandu, Nepal</p>
                    <div className="rec__items">
                      <div className="rec__count" style={{ marginLeft: "0px" }}>
                        3
                      </div>
                      <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                      <div className="rec__count">4</div>
                      <ShowerIcon className="rec__icon" />
                      <div className="rec__count__lug">1,505</div>
                      <LuggageIcon className="rec__icon" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          {/* House Recommendation Ends Here */}
        </Row>
      </Container>
    </>
  );
};

export default HouseInfo;
