import React from "react";

import { Row } from "react-bootstrap";
import Recommendation from "./Recommendation";

const RoomRecommendation = () => {
  return (
    <div className="houseinfo__recommendation">
      <div style={{ fontSize: "25px", marginTop: "40px", textAlign: "left" }}>
        Recommended room you may like
      </div>
      <div className="recommendation__content">
        <Row>
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
        </Row>
      </div>
    </div>
  );
};

export default RoomRecommendation;
