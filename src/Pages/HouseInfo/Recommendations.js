import React from "react";
import LuggageIcon from "@mui/icons-material/Luggage";
import ShowerIcon from "@mui/icons-material/Shower";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import { Col } from "react-bootstrap";
import { Badge } from "@mantine/core";

const Recommendations = () => {
  return (
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
          <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
            3
          </Badge>
          <AirlineSeatIndividualSuiteIcon className="rec__icon" />
          <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
            4
          </Badge>
          <ShowerIcon className="rec__icon" />
          <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
            1,505
          </Badge>
          <LuggageIcon className="rec__icon" />
        </div>
      </div>
    </Col>
  );
};

export default Recommendations;
