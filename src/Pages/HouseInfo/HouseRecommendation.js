import React from "react";

import { Row } from "react-bootstrap";
import { Badge } from "@mantine/core";
import { Col } from "react-bootstrap";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import LuggageIcon from "@mui/icons-material/Luggage";
import { useSelector } from "react-redux";

const HouseRecommendation = () => {
  const content = useSelector((state) => state.buyInfoReducer);
  const { title, image, description, beds, showers, parking } = content;
  return (
    <div className="houseinfo__recommendation">
      <div style={{ fontSize: "25px", marginTop: "40px", textAlign: "left" }}>
        Recommended houses based on your preferences
      </div>
      <div className="recommendation__content">
        <Row>
          <Col md={3}>
            <div className="rec__image">
              <img src={image} alt="koonya pavillion" />
            </div>
            <div className="rec__content">
              <h1>{title}</h1>

              <p> {description}</p>
              <div className="rec__items">
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {beds}
                </Badge>
                <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {showers}
                </Badge>
                <ShowerIcon className="rec__icon" />
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {parking}
                </Badge>
                <LuggageIcon className="rec__icon" />
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="rec__image">
              <img src={image} alt="koonya pavillion" />
            </div>
            <div className="rec__content">
              <h1>{title}</h1>

              <p> {description}</p>
              <div className="rec__items">
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {beds}
                </Badge>
                <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {showers}
                </Badge>
                <ShowerIcon className="rec__icon" />
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {parking}
                </Badge>
                <LuggageIcon className="rec__icon" />
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="rec__image">
              <img src={image} alt="koonya pavillion" />
            </div>
            <div className="rec__content">
              <h1>{title}</h1>

              <p> {description}</p>
              <div className="rec__items">
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {beds}
                </Badge>
                <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {showers}
                </Badge>
                <ShowerIcon className="rec__icon" />
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {parking}
                </Badge>
                <LuggageIcon className="rec__icon" />
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="rec__image">
              <img src={image} alt="koonya pavillion" />
            </div>
            <div className="rec__content">
              <h1>{title}</h1>

              <p> {description}</p>
              <div className="rec__items">
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {beds}
                </Badge>
                <AirlineSeatIndividualSuiteIcon className="rec__icon" />
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {showers}
                </Badge>
                <ShowerIcon className="rec__icon" />
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  {parking}
                </Badge>
                <LuggageIcon className="rec__icon" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HouseRecommendation;
