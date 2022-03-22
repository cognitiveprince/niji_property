import React from "react";

import { Row } from "react-bootstrap";
import Recommendations from "./Recommendations";

const HouseRecommendation = () => {
  return (
    <div className="houseinfo__recommendation">
      <div style={{ fontSize: "25px", marginTop: "40px", textAlign: "left" }}>
        Recommended houses based on your preferences
      </div>
      <div className="recommendation__content">
        <Row>
          <Recommendations />
          <Recommendations />
          <Recommendations />
          <Recommendations />
        </Row>
      </div>
    </div>
  );
};

export default HouseRecommendation;
