import React from "react";
import "./SellInfo.scss";
import { Container, Row, Col } from "react-bootstrap";

const SellInfo = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="sell__info__left">
            <h1>Just a quick information From You </h1>
          </div>
        </Col>
        <Col>Second</Col>
      </Row>
    </Container>
  );
};

export default SellInfo;
