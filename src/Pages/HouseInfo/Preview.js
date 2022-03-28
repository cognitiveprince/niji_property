import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./HouseInfo.scss";
import { Center } from "@mantine/core";
import { useSelector } from "react-redux";

const Preview = () => {
  const content = useSelector((state) => state.buyInfoReducer);
  const { image } = content;
  return (
    <Container>
      <Row>
        <div className="preview__images">
          <Col>
            <Center>
              <div className="preview__content">
                <img
                  src={image}
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
                  src={image}
                  alt="koonya pavillion"
                  className="preview__second__image"
                />
                <img
                  src={image}
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
                  src={image}
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
                  src={image}
                  alt="koonya pavillion"
                  className="preview__fifth__image"
                />
                <img
                  src={image}
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
