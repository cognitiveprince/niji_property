import React from "react";
import { Row, Col } from "react-bootstrap";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";

const RentContent = () => {
  return (
    <Row>
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
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count">2</div>
              <PeopleIcon className="buy__icon" />
            </div>
          </div>

          <div className="rent__price">
            <h1>Rs. 1,000</h1>
            <p>/monthly</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default RentContent;
