import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SellPage.scss";

const SellPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="sell__main">
            <h1>
              Want to sell/rent your{" "}
              <span style={{ color: "#593AE6" }}>house</span> ?
            </h1>
            <p>
              Niji property provides you a platform to sell your house in a
              convenient and faster way
              <br />
              Niji provides the buyers every necessary experience to help you
              sell your house <br /> At the best price.
            </p>
            <div className="sell__line"></div>
            <Link to="/sell/selloption">
              <Button variant="outline-dark" size="lg" className="sell__btn">
                Get Started
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SellPage;
