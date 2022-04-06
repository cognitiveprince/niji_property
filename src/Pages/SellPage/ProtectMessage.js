import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProtectMessage = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <div className="sell__main">
            <h1>Please Login To Continue</h1>
            <Link to="/login">
              <Button variant="primary" size="lg" className="sell__option__btn">
                Login
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProtectMessage;
