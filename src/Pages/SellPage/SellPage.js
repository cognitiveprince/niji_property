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
            <div className="sell__desktop">
              <p>
                Niji property provides you a platform to sell your house in a
                convenient and faster way
                <br />
                Niji provides the buyers every necessary experience to help you
                sell your house <br /> At the best price.
              </p>
            </div>
            <div className="sell__mobile">
              <img
                src="https://res.cloudinary.com/dnfr5p8jc/image/upload/v1650440255/house_illustration_opvess.png"
                alt="houseimg"
                style={{ width: "251px", height: "251px" }}
                className="sell__main__img"
              />
              <p>
                Niji property provides you a platform to sell your house in a
                convenient and faster way
              </p>
            </div>
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
