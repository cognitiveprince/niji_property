import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Modal } from "@mantine/core";
import "./HouseInfo.scss";
import HouseCard from "./HouseCard";
import HouseComments from "./HouseComments";
import HouseRecommendation from "./HouseRecommendation";
import HouseRecommendationSwipe from "./HouseRecommendationSwipe";
import Preview from "./Preview";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBuyInfo } from "../../Redux/Actions/Actions";
import Map from "../../Compnents/Map/Map";

const HouseInfo = () => {
  const [opened, setOpened] = useState(false);

  const content = useSelector((state) => state.buyInfoReducer);
  const { id, title, images, description, bedroom, bathroom, parking_sapce, location } = content;
  const { buyID } = useParams();
  const dispatch = useDispatch();

  const fetchBuyDetail = async () => {
    const res = await axios
      .get(`https://nijiproperty-server.herokuapp.com/sellproperty/house/${buyID}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(getBuyInfo(res.data));
  };

  useEffect(() => {
    if (buyID && buyID !== "") {
      fetchBuyDetail();
    }
  }, [buyID]);

  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          {/* Image Section Of The Page */}

          <Col md={6} className="houseinfo__main__image">
            <img src={images[0].image} alt="koonya pavillion" />
          </Col>
          <Col md={2} className="houseinfo__second__image">
            {
              images.map((src, index) => {
                index != 0 && <img src={src} alt="koonya pavillion" key={index} />
              })
            }
            <div className="d-grid gap-2">
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                centered
                size="80%"
                transition="fade"
                transitionDuration={600}
                overlayOpacity={0.9}
                overflow="inside"
              >
                <Preview />
              </Modal>

              <Button
                onClick={() => setOpened(true)}
                variant="outline-dark"
                size="lg"
              >
                See all
              </Button>
            </div>
          </Col>

          {/* Image Section Of The Page Ends */}

          {/* Card Section */}
          <Col className="desktop__house">
            <HouseCard />
          </Col>
          {/* Card Section Ends */}

          {/* House info text  */}
          <div className="houseinfo__main__title">
            <Col md={8}>
              <div className="houseinfo__text">
                <h1>{price}</h1>
                <h2>An Inimitable Experience of Place - {title}</h2>
                <p>{description}</p>
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

          {/* Card Section */}
          <Col className="mobile__house">
            <HouseCard />
          </Col>
          {/* Card Section Ends */}

          {/* House Info Map */}
          <div className="houseinfo__map">
            <Button variant="primary" size="lg">
              House Location , Map View
            </Button>
            <div style={{ textAlign: "center" }}>
              <Map lat1="27.721" lng2="85.307" />
            </div>
          </div>
          {/* House Info Map Ends */}

          {/* House Info Comments */}
          <HouseComments />
          {/* House Info Comments Ends Here */}

          {/* House Info Recommendation Starts */}
          <div className="desktop__recommend">
            <HouseRecommendation />
          </div>
          {/* House Recommendation Ends Here */}

          {/* House Info Recommendation Starts */}
          <div className="mobile__recommend">
            <HouseRecommendationSwipe />
          </div>

          {/* House Recommendation Ends Here */}
        </Row>
      </Container>
    </>
  );
};

export default HouseInfo;
