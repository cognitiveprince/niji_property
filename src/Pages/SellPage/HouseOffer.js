import React, { useState } from "react";
import "./HouseOffer.scss";
import { Center } from "@mantine/core";
import { Switch } from "@mantine/core";
import { Link } from "react-router-dom";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ShowerIcon from "@mui/icons-material/Shower";
import { Container, Row, Col, Button } from "react-bootstrap";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import ProtectMessage from "./ProtectMessage";

const HouseOffer = () => {
  const [loading, setLoading] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });

  if (loading) {
    return (
      <div>
        <Container style={{ marginTop: "20px" }}>
          <Row md={2} sm={1} xs={1}>
            <Col>
              <div className="house__offer__left">
                <Center>
                  <h1>
                    Components that makes the <br />
                    house fulfilled
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
              <div className="house__offer__right">
                <div className="house__offer__title">House offers</div>
                <div className="house__offer__container">
                  <div className="house__offer__content">
                    <Row>
                      <Col>
                        <SingleBedIcon /> Bedrooms
                      </Col>
                      <Col>
                        <AddCircleOutlineIcon /> <span>3</span>{" "}
                        <RemoveCircleOutlineIcon />
                      </Col>
                    </Row>
                  </div>

                  <div className="house__offer__content">
                    <Row>
                      <Col>
                        <ShowerIcon /> Washrooms
                      </Col>
                      <Col>
                        <AddCircleOutlineIcon /> <span>2</span>{" "}
                        <RemoveCircleOutlineIcon />
                      </Col>
                    </Row>
                  </div>

                  <div className="house__offer__content">
                    <Row>
                      <Col>
                        <KitchenIcon /> Kitchen
                      </Col>
                      <Col>
                        <AddCircleOutlineIcon /> <span>1</span>{" "}
                        <RemoveCircleOutlineIcon />
                      </Col>
                    </Row>
                  </div>

                  <div className="house__offer__content">
                    <Row>
                      <Col>
                        <DirectionsCarIcon /> Parking Space
                      </Col>
                      <Col>
                        <Switch
                          onLabel="NO"
                          offLabel="YES"
                          size="lg"
                          color="dark"
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
                <Link to="/sell/houseimg">
                  <Button variant="primary" size="lg" className="house__btn">
                    Next
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return <ProtectMessage />;
  }
};

export default HouseOffer;
