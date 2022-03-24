import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./RoomRentInfo.scss";
import { Center } from "@mantine/core";

const Preview = () => {
  return (
    <Container>
      <Row>
        <div className="preview__images">
          <Col>
            <Center>
              <div className="preview__content">
                <img
                  src={require("../../Assets/preview_1.png")}
                  alt="koonya pavillion"
                  className="preview__main__image"
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
                  className="preview__second__image"
                />
                <img
                  src={require("../../Assets/preview_3.png")}
                  alt="koonya pavillion"
                  className="preview__third__image"
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
                  className="preview__fourth__image"
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
                  className="preview__fifth__image"
                />
                <img
                  src={require("../../Assets/preview_6.png")}
                  alt="koonya pavillion"
                  className="preview__sixth__image"
                />
              </div>
            </Center>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Preview;
