import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Center } from "@mantine/core";
import { Link } from "react-router-dom";
import "./PersonalInfo.scss";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import ProtectMessage from "./ProtectMessage";

const PersonalInfo = () => {
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
        <Row md={2} sm={1} xs={1}>
          <Col>
            <div className="personal__info__left">
              <Center>
                <h1>
                  These information will help us <br />
                  Authenticate & contact you
                </h1>
              </Center>
              <Center>
                <p>
                  Note: Your personal information will only be with niji
                  property
                </p>
              </Center>
            </div>
          </Col>
          <Col>
            <div className="personal__info__right">
              <div className="personal__right__title">Personal Information</div>
              <div className="personal__right__content">
                <form style={{ marginTop: "40px" }}>
                  <Row>
                    <Col>
                      <div class="form-group">
                        <label>User name</label>
                        <input type="text" />
                      </div>
                      <div class="form-group">
                        <label>Phone number</label>
                        <input type="text" />
                      </div>
                      <div class="form-group">
                        <label>WhatsApp number</label>
                        <input type="text" />
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input type="text" />
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
              <Link to="/sell/publish">
                <Button variant="primary" size="lg" className="personal__btn">
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

export default PersonalInfo;
