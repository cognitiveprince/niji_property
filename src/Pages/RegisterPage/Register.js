import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Center } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import image from "../../Assets/register.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import "./Register.scss";

const Register = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row md={2} sm={1} xs={1}>
        <Center>
          <Col md={10}>
            <div className="register__right">
              <div className="register__right__title">Sign Up</div>
              <div className="register__right__content">
                <form style={{ marginTop: "10px" }}>
                  <Row>
                    <Col md={8}>
                      <div class="form-group">
                        <label>Username</label>
                        <div className="register__input__container">
                          <span>
                            <PersonIcon />
                          </span>
                          <input type="text" className="register__input" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <div className="register__input__container">
                          <span>
                            <MailOutlineIcon />
                          </span>
                          <input type="text" className="register__input" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <div className="register__input__container">
                          <span>
                            <LockIcon />
                          </span>
                          <input type="text" className="register__input" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <div className="register__input__container">
                          <span>
                            <LockIcon />
                          </span>
                          <input type="text" className="register__input" />
                        </div>
                      </div>
                      <Row md="auto">
                        <div className="register__remember__container">
                          <Col md={12}>
                            <span>
                              <Checkbox label="I have read and agree to Terms and conditions" />
                            </span>
                          </Col>
                        </div>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div className="register__button__container">
                            <Center>
                              <Button size="lg" className="register__btn">
                                Sign Up
                              </Button>
                            </Center>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Center>

        <Col>
          <div className="register__left">
            <img src={image} alt="registerimage" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
