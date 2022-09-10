import React from "react";
import { Col } from "react-bootstrap";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterMobile = () => {
  return (
    <>
      <div className="footer__mobile__container">
        <div className="footer__mobile">
          <Col md={2}>
            <div className="footer__links">
              <a href="#information">Information</a>
              <a href="#About">About Us</a>
              <a href="#Contact">Contact</a>
              <a href="#Privacy">Privacy policy</a>
            </div>
          </Col>

          <Col>
            <div className="footer__border"></div>
          </Col>

          <Col md={3}>
            <div className="footer__contact__container">
              <div className="footer__contact">
                <FlightTakeoffIcon style={{ color: "#0542EB" }} />
                <p>Nayabazar Marg, Kathmandu, Nepal</p>
              </div>
              <div className="footer__contact">
                <LocalPhoneIcon style={{ color: "#0542EB" }} />
                <p>+977-1-5913449 , 9840384286, 986-8203428, +977-980-6564588</p>
              </div>
              <div className="footer__contact">
                <EmailIcon style={{ color: "#0542EB" }} />
                <p>nijiproperty1121@gmail.com</p>
              </div>
            </div>
          </Col>
        </div>

        <div className="footer__social__container">
          <Col md={3} xs={12} sm={12}>
            <div>
              <h1>Our Social Medias</h1>
            </div>
            <div className="footer__social">
            <div>
                <a href="https://www.facebook.com/nijiproperty/"> <FacebookIcon /></a>
              </div>
              <div>
              <a> <InstagramIcon /></a>
              </div>
              <div>
              <a> <TwitterIcon /> </a>
              </div>
            </div>
          </Col>
        </div>

        <div className="footer__deals__container">
          <Col md={3} xs={12}>
            <div className="footer__deals">
              <h1>Get the lastet deals</h1>
              <p>
                Get to know the weekly deals that helps you to find the perfect
                house. Join weekly niji property news to get the lastest
                information into your inbox.
              </p>
              <div className="footer__email">
                <input type="text" placeholder="Enter your email" />
                <button>SIGN UP</button>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </>
  );
};

export default FooterMobile;
