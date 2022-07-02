import React from "react";
import { Center } from "@mantine/core";
import { Button, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="develop__skills">
      <h1>What do we do ?</h1>
      <p>
        Our team of engineers are ready to meet your requirements. <br /> Our
        goal is to build the nation, a reshap towards a <br /> Better future
      </p>

      <div className="skills__buttons">
        <Center>
          <Row>
            <Col>
              <div className="skills__content">
                <img
                  src={require("../../Assets/skill1.png")}
                  alt="koonya pavillion"
                />
                <Button
                  className="skills__btn"
                  size="lg"
                  style={{ background: "#49FC6B" }}
                >
                  Plan/buld house
                </Button>
              </div>
            </Col>
            <Col>
              <div className="skills__content">
                <img
                  src={require("../../Assets/skill2.png")}
                  alt="koonya pavillion"
                />
                <Button
                  className="skills__btn"
                  size="lg"
                  style={{ background: "#FFC364" }}
                >
                  Plan/buld house
                </Button>
              </div>
            </Col>
            <Col>
              <div className="skills__content">
                <img
                  src={require("../../Assets/skill3.png")}
                  alt="koonya pavillion"
                />
                <Button
                  className="skills__btn"
                  size="lg"
                  style={{ background: "#FF6464" }}
                >
                  Plan/buld house
                </Button>
              </div>
            </Col>
          </Row>
        </Center>
      </div>
    </div>
  );
};

export default Skills;
