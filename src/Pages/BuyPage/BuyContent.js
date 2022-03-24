import React from "react";
import { Link } from "react-router-dom";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Col } from "react-bootstrap";
import { Badge, Center } from "@mantine/core";

const BuyContent = () => {
  return (
    <>
      <Col>
        <Center>
          <div className="buy__image">
            <Link to="/houseinfo">
              <img
                src={require("../../Assets/first_prop.png")}
                alt="koonya pavillion"
              />
            </Link>
          </div>
        </Center>
        <div className="buy__content">
          <h1>Koonya Pavilion</h1>

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
      </Col>
    </>
  );
};

export default BuyContent;
