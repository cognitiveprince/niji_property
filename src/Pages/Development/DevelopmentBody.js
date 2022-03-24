import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Center } from "@mantine/core";

const DevelopmentBody = () => {
  return (
    <Center>
      <div className="develop__project__container">
        <Row>
          <Col>
            <div className="develop__project__img">
              <img
                src={require("../../Assets/dev1.png")}
                alt="koonya pavillion"
                className="develop__project__img__third"
              />

              <img
                src={require("../../Assets/dev2.png")}
                alt="koonya pavillion"
                className="develop__project__img__third"
                style={{ marginTop: "90px" }}
              />

              <img
                src={require("../../Assets/dev3.png")}
                alt="koonya pavillion"
                className="develop__project__img__third"
                style={{ marginTop: "180px" }}
              />
            </div>
          </Col>
          <Col>
            <div className="develop__project__text">
              <h1>
                BELIVE IN US <br /> WITH OUR PROJECTS
              </h1>
              <p>
                We provide a wide range of services <br /> according to your
                demands and <br /> requirements
              </p>
              <Button variant="outline-dark" className="develop__btn" size="lg">
                View our projects
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Center>
  );
};

export default DevelopmentBody;
