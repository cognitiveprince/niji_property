import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Center } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import image from "../../Assets/register.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Register.scss";
import { registerInitiate } from "../../Redux/Actions/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.userReducer);

  const [username, setUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");
  const [registerCheckbox, setRegisterCheckbox] = useState(false);

  useEffect(() => {
    if (currentUser) {
      toast("User Registered Successfully");
      navigate("/buy");
    }
  }, [currentUser, navigate]);

  const register = (e) => {
    e.preventDefault();
    if (registerPassword !== registerPasswordConfirm) {
      alert("Passwords do not match");
      return;
    }
    if (!registerCheckbox) {
      alert("You must agree to the terms and conditions");
      return;
    } else {
      dispatch(registerInitiate(registerEmail, registerPassword, username));
      setUsername("");
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterPasswordConfirm("");
      setRegisterCheckbox(false);
    }
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <ToastContainer />
      <Row md={2} sm={1} xs={1}>
        <Center>
          <Col md={10}>
            <div className="register__right">
              <div className="register__right__title">Sign Up</div>
              <div className="register__right__content">
                <form style={{ marginTop: "10px" }}>
                  <Row>
                    <Col md={8}>
                      <div className="form-group">
                        <label>Username</label>
                        <div className="register__input__container">
                          <span>
                            <PersonIcon />
                          </span>
                          <input
                            type="text"
                            className="register__input"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <div className="register__input__container">
                          <span>
                            <MailOutlineIcon />
                          </span>
                          <input
                            type="text"
                            className="register__input"
                            onChange={(e) => {
                              setRegisterEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <div className="register__input__container">
                          <span>
                            <LockIcon />
                          </span>
                          <input
                            type="password"
                            className="register__input"
                            onChange={(e) => {
                              setRegisterPassword(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <div className="register__input__container">
                          <span>
                            <LockIcon />
                          </span>
                          <input
                            type="password"
                            className="register__input"
                            onChange={(e) => {
                              setRegisterPasswordConfirm(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <Row md="auto">
                        <div className="register__remember__container">
                          <Col md={12}>
                            <span>
                              <Checkbox
                                label="I have read and agree to Terms and conditions"
                                onChange={(e) => {
                                  setRegisterCheckbox(e.target.checked);
                                }}
                              />
                            </span>
                          </Col>
                        </div>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div className="register__button__container">
                            <Center>
                              <Button
                                size="lg"
                                className="register__btn"
                                onClick={register}
                              >
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
