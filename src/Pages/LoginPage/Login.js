import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Center } from "@mantine/core";
import { Switch, Badge } from "@mantine/core";
import image from "../../Assets/login.png";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../../Redux/Actions/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase-config";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  /* Setting the state of the loginEmail, loginPassword, and passwordShown to an empty string, an empty
  string, and false respectively. */
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const { currentUser } = useSelector((state) => state.loginReducer);

  /**
   * If the password is shown, hide it. If the password is hidden, show it.
   */
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/buy");
      toast.success("Login Successful!");
    }
  }, [currentUser, navigate]);

  /**
   * The login function is an async function that calls the signInWithEmailAndPassword function, which
   * is a function that takes in three parameters: auth, loginEmail, and loginPassword. The
   * signInWithEmailAndPassword function returns a user object, which is then assigned to the user
   * variable.
   */
  const login = (e) => {
    e.preventDefault();
    if (loginEmail === "" || loginPassword === "") {
      return alert("Please enter an email and password");
    }
    try {
      dispatch(loginInitiate(loginEmail, loginPassword));
    } catch (error) {
      toast("User Name or Password Is Incorrect");
    }
  };

  const forgotPasswordHandler = () => {
    if (loginEmail === "") {
      return alert("Please enter an email");
    }
    try {
      sendPasswordResetEmail(auth, loginEmail, {
        url: "http://localhost:3000/login",
      })
        .then(() => {
          toast.success("Password Reset Email Sent");
        })
        .catch((error) => {
          toast.error("Invalid Email");
        });
    } catch (error) {
      toast("User Name or Password Is Incorrect");
    }
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <ToastContainer />
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
                            <span
                              className="login__forgot"
                              onClick={forgotPasswordHandler}
                            >
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
