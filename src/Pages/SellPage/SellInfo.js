import React, { useState } from "react";
import "./SellInfo.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Center } from "@mantine/core";
import { Link } from "react-router-dom";
import ProtectMessage from "./ProtectMessage";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const SellInfo = () => {
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
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <div className="sell__info__left">
              <Center>
                <h1>
                  Just a quick information <br />
                  From You
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
            <div className="sell__info__right">
              <div className="sell__right__title">House Information</div>
              <div className="sell__right__content">
                <form style={{ marginTop: "40px" }}>
                  <Row>
                    <Col>
                      <div class="form-group">
                        <label>House name</label>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label>Area size</label>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label>Address</label>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label>Built year</label>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label>Price</label>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label>House type</label>
                        <input type="text" />
                      </div>
                    </Col>
                  </Row>
                  <Center>
                    <div
                      class="form-group"
                      style={{ width: "807px", height: "184px" }}
                    >
                      <label>Description</label>
                      <input
                        type="text"
                        style={{
                          marginTop: "20px",
                          height: "100px",
                        }}
                      />
                    </div>
                  </Center>
                </form>
              </div>
              <Link to="/sell/mapinfo">
                <Button variant="primary" size="lg" className="sell__btn">
                  Next
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <ProtectMessage />;
  }
};

export default SellInfo;
