import React from "react";
import "./Publish.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Badge } from "@mantine/core";

const Publish = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="publish__main">
            <h1 style={{ color: "#593AE6" }}>All done!</h1>
            <p>
              All of the information have been collected to help sell your
              house. Some of
              <br />
              your information will only be kepy by niji property.
            </p>
            <p>
              Just a click on{" "}
              <Badge
                variant="gradient"
                gradient={{ from: "grape", to: "pink", deg: 35 }}
              >
                publish
              </Badge>{" "}
              and your house will be hosted in the platform.
            </p>
            <div className="publish__line"></div>
            <Link to="/sell">
              <Button variant="outline-dark" size="lg" className="publish__btn">
                Publish
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Publish;
