import React from "react";
import { Col } from "react-bootstrap";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

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
                <p>984187394, 977-1-4118745, 4110987</p>
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
                <img
                  src="https://res.cloudinary.com/dnfr5p8jc/image/upload/v1650353688/footer_fb_altftq.png"
                  alt="fb"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dnfr5p8jc/image/upload/v1650353918/footer_insta_bkcxxm.png"
                  alt="insta"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dnfr5p8jc/image/upload/v1650353938/footer_twitter_nasw2u.png"
                  alt="twiiter"
                />
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
