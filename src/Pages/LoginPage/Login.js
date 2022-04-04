import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Center } from "@mantine/core";
import { Switch, Badge } from "@mantine/core";
import image from "../../Assets/login.png";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";

const Login = () => {
  let navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const login = async () => {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(user);
    navigate("/buy");
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row md={2} sm={1} xs={1}>
        <Col>
          <div className="login__left">
            <img src={image} alt="loginimage" />
          </div>
        </Col>
        <Center>
          <Col md={7}>
            <div className="login__right">
              <div className="login__right__title">Sign in</div>
              <div className="login__right__content">
                <form style={{ marginTop: "10px" }}>
                  <Row>
                    <Col>
                      <div className="form-group">
                        <label>Email</label>
                        <div className="login__input__container">
                          <span>
                            <MailOutlineIcon />
                          </span>
                          <input
                            type="text"
                            className="login__input"
                            onChange={(e) => {
                              setLoginEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <div className="login__input__container">
                          <span>
                            <LockIcon />
                          </span>
                          <input
                            type={passwordShown ? "text" : "password"}
                            className="login__input"
                            onChange={(e) => {
                              setLoginPassword(e.target.value);
                            }}
                          />
                          <span>
                            <VisibilityOffIcon
                              onClick={togglePassword}
                              style={{ cursor: "pointer" }}
                            />
                          </span>
                        </div>
                      </div>
                      <Row md="auto">
                        <div className="login__remember__container">
                          <Col md={12}>
                            <span>
                              <Switch
                                onLabel=""
                                offLabel=""
                                size="sm"
                                color="dark"
                                label="Remember me"
                              />
                            </span>
                          </Col>

                          <Col md={12} style={{ textAlign: "center" }}>
                            <span className="login__forgot">
                              Forgot password ?
                            </span>
                          </Col>
                        </div>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div className="login__button__container">
                            <Center>
                              <Button
                                variant="primary"
                                size="lg"
                                className="login__btn"
                                onClick={login}
                              >
                                Sign In
                              </Button>
                            </Center>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <h1 className="login__bottom__text">
                            New to the website ?{" "}
                            <Link
                              to="/register"
                              style={{ textDecoration: "none" }}
                            >
                              <Badge
                                style={{
                                  backgroundColor: "purple",
                                  color: "white",
                                  cursor: "pointer",
                                }}
                              >
                                Sign Up
                              </Badge>
                            </Link>
                          </h1>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Center>
      </Row>
    </Container>
  );
};

export default Login;
