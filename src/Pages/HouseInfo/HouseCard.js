import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EmailIcon from "@mui/icons-material/Email";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import KitchenIcon from "@mui/icons-material/Kitchen";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Col, Button, Row } from "react-bootstrap";
import LuggageIcon from "@mui/icons-material/Luggage";
import ShowerIcon from "@mui/icons-material/Shower";
import { Badge } from "@mantine/core";

const HouseCard = () => {
  return (
    <>
      {/* Card Section */}
      <div className="houseinfo__card">
        {/* Title Section of The Card */}
        <div className="card__title">
          <Row>
            <Col md={4}>
              <Badge style={{ backgroundColor: "black", color: "white" }}>
                Description
              </Badge>
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
          <div className="card__contact__info" style={{ borderBottom: "none" }}>
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
                  Show More <ChevronRightIcon style={{ color: "black" }} />
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
    </>
  );
};

export default HouseCard;
