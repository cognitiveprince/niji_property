import React from "react";
import "./MapInfo.scss";
import { Center } from "@mantine/core";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const MapInfo = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row md={2} sm={1} xs={1}>
        <Col>
          <div className="map__info__left">
            <Center>
              <h1>
                Let the buyers know your house <br />
                exact location
              </h1>
            </Center>
            <Center>
              <p>
                Note: These information will help your house to be on the
                featured page
              </p>
            </Center>
          </div>
        </Col>
        <Col>
          <div className="map__info__right">
            <div className="map__right__title">
              <h1>Map Location</h1>
              <p>
                This section shows your current location of the house. Your
                location will only be shared to use and confirmed buyers.
              </p>
            </div>
            <div className="map__right__content">
              <iframe
                src="https://maps.google.com/maps?q=kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="808"
                height="514"
                frameBorder="0"
                style={{ border: 0, marginTop: "40px" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="map"
              ></iframe>
            </div>
            <Link to="/sell/houseoffer">
              <Button variant="primary" size="lg" className="map__btn">
                Next
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MapInfo;
