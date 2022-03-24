import React from "react";
import { Row, Col } from "react-bootstrap";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Badge, Center } from "@mantine/core";
import { Link } from "react-router-dom";

const BuyCollapseContent = () => {
  return (
    <Row>
      <Center>
        <Col style={{ marginBottom: "20px" }}>
          <div className="buy__collapse__container">
            <div className="buy__collapse__image">
              <Link to="/roomrentinfo">
                <img
                  src={require("../../Assets/first_prop.png")}
                  alt="koonya pavillion"
                />
              </Link>
            </div>

            <div className="buy__collapse__info">
              <h1>Koonya Pavillion</h1>

              <p> Baluwatar , Kathmandu, Nepal</p>
              <div className="buy__items">
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  3
                </Badge>
                <AirlineSeatIndividualSuiteIcon className="buy__icon" />
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  4
                </Badge>
                <ShowerIcon className="buy__icon" />
                <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                  1,505
                </Badge>
                <LuggageIcon className="buy__icon" />
              </div>
            </div>

            <div className="buy__collapse__price">
              <h1>Rs. 10,00,00,000</h1>
            </div>
          </div>
        </Col>
      </Center>
    </Row>
  );
};

export default BuyCollapseContent;
