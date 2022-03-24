import React from "react";
import { Row, Col } from "react-bootstrap";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import PeopleIcon from "@mui/icons-material/People";
import { Badge, Center } from "@mantine/core";
import { Link } from "react-router-dom";

const RentContent = () => {
  return (
    <Row>
      <Center>
        <Col style={{ marginBottom: "20px" }}>
          <div className="rent__container">
            <div className="rent__image">
              <Link to="/roomrentinfo">
                <img
                  src={require("../../Assets/roomrentinfo_1.png")}
                  alt="koonya pavillion"
                />
              </Link>
            </div>

            <div className="rent__info">
              <h1>Salon de Kathmandu (Room - 1)</h1>

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
                  2
                </Badge>
                <PeopleIcon className="buy__icon" />
              </div>
            </div>

            <div className="rent__price">
              <h1>Rs. 1,000</h1>
              <p>/monthly</p>
            </div>
          </div>
        </Col>
      </Center>
    </Row>
  );
};

export default RentContent;
