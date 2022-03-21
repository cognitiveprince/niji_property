import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SellOption.scss";

const SellOption = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="sell__main">
            <h1>Choose one of the category</h1>
            <p>
              Niji property provides you a platform to sell & buy your house.
              Our team will verify your published <br /> post in order to
              maintain trust among the buyers
            </p>
            <div className="sell__line"></div>
            <Link to="/sellinfo">
              <Button variant="primary" size="lg" className="sell__option__btn">
                Sell
              </Button>
            </Link>
            <Button
              variant="primary"
              size="lg"
              className="sell__option__btn"
              style={{ background: "#8D4DF4" }}
            >
              Rent
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SellOption;
