import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./HouseInfo.scss";
import { Center } from "@mantine/core";

const Preview = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Center>
            <div className="preview__content">
              <img
                src={require("../../Assets/preview_1.png")}
                alt="koonya pavillion"
                style={{ width: "1372px", height: "861px" }}
              />
            </div>
          </Center>
        </Col>
        <Col>
          <Center>
            <div className="preview__content">
              <img
                src={require("../../Assets/preview_2.png")}
                alt="koonya pavillion"
                style={{ width: "780px", height: "651px", marginRight: "50px" }}
              />
              <img
                src={require("../../Assets/preview_3.png")}
                alt="koonya pavillion"
                className="preview__image__3"
                style={{ width: "532px", height: "651px" }}
              />
            </div>
          </Center>
        </Col>
        <Col>
          <Center>
            <div className="preview__content">
              <img
                src={require("../../Assets/preview_4.png")}
                alt="koonya pavillion"
                style={{ width: "1372px", height: "861px" }}
              />
            </div>
          </Center>
        </Col>
        <Col>
          <Center>
            <div className="preview__content">
              <img
                src={require("../../Assets/preview_5.png")}
                alt="koonya pavillion"
                style={{ width: "780px", height: "651px", marginRight: "50px" }}
              />
              <img
                src={require("../../Assets/preview_6.png")}
                alt="koonya pavillion"
                className="preview__image__3"
                style={{ width: "532px", height: "651px" }}
              />
            </div>
          </Center>
        </Col>
      </Row>
    </Container>
  );
};

export default Preview;
