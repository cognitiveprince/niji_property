import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./RoomRentInfo.scss";
import HouseCard from "./RoomCard";
import HouseComments from "./RoomComment";
import HouseRecommendation from "./RoomRecommendation";

const RoomRentInfo = () => {
  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          {/* Image Section Of The Page */}

          <Col md={6} className="houseinfo__main__image">
            <img
              src={require("../../Assets/roomrentinfo_1.png")}
              alt="koonya pavillion"
            />
          </Col>
          <Col md={2} className="houseinfo__second__image">
            <img
              src={require("../../Assets/roomrentinfo_2.png")}
              alt="koonya pavillion"
            />
            <img
              src={require("../../Assets/roomrentinfo_3.png")}
              alt="koonya pavillion"
              style={{ marginTop: "10px", borderRadius: "0 0 10px 0" }}
            />
            <div className="d-grid gap-2">
              <Button variant="outline-dark" size="lg">
                See all
              </Button>
            </div>
          </Col>

          {/* Image Section Of The Page Ends */}

          {/* Card Section */}
          <Col>
            <HouseCard />
          </Col>
          {/* Card Section Ends */}

          {/* House info text  */}
          <div className="houseinfo__main__title">
            <Col md={8}>
              <div className="houseinfo__text">
                <h1>Rs. 15,000</h1>
                <h2>Entire rental unit</h2>
                <p>Hattigauda, Kathmandu, Nepal</p>
              </div>
              <div>
                <p>
                  The pavilion is intended as a place separate from the main
                  house, which was also designed by Room11, dedicated to
                  creative practice, where the client can retreat to find
                  inspiration and solace in nature. It was the kind of project,
                  therefore, that required an especially strong rapport between
                  architect and client – its success dependent less on the
                  response to a typical brief and more on an alignment of
                  intellectual and artistic interests and, above all, a shared
                  affinity with the landscape
                </p>
              </div>
              <div style={{ float: "right", color: "#0900EA" }}>Learn More</div>
            </Col>
          </div>
          {/* House info text ends */}

          {/* House Info Map */}
          <div className="houseinfo__map">
            <Button variant="primary" size="lg">
              Room Location , Map View
            </Button>
            <div style={{ textAlign: "center" }}>
              <iframe
                src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="1479"
                height="888"
                frameBorder="0"
                style={{ border: 0, marginTop: "40px" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="map"
              ></iframe>
            </div>
          </div>
          {/* House Info Map Ends */}

          {/* House Info Comments */}
          <HouseComments />
          {/* House Info Comments Ends Here */}

          {/* House Info Recommendation Starts */}
          <HouseRecommendation />
          {/* House Recommendation Ends Here */}
        </Row>
      </Container>
    </>
  );
};

export default RoomRentInfo;
