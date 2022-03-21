import React from "react";
import "./BuyPage.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import LuggageIcon from "@mui/icons-material/Luggage";

const BuyPage = () => {
  return (
    <Container>
      <div className="buy__list">
        <DragHandleIcon /> <p> List view </p>
      </div>

      <Row>
        {/* First Row Content */}
        <Col>
          <div className="buy__image">
            <Link to="/houseinfo">
              <img
                src={require("../../Assets/first_prop.png")}
                alt="koonya pavillion"
              />
            </Link>
          </div>

          <div className="buy__content">
            <h1>Koonya Pavilion</h1>

            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>
        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/second_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>
        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/third_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>

        {/* Second Row */}
        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/4_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>

        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/5_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>

        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/6_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>

        {/* Third Row Content */}

        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/7_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>

        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/8_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>

        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/9_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>

        {/* Fourth Row Content */}

        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/10_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>

        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/11_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>

        <Col>
          <div className="buy__image">
            <img
              src={require("../../Assets/12_prop.png")}
              alt="koonya pavillion"
            />
          </div>
          <div className="buy__content">
            <h1>Koonya Pavilion</h1>
            <p> Baluwatar , Kathmandu, Nepal</p>
            <div className="buy__items">
              <div className="buy__count" style={{ marginLeft: "0px" }}>
                3
              </div>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <div className="buy__count">4</div>
              <ShowerIcon className="buy__icon" />
              <div className="buy__count__lug">1,505</div>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </Col>
      </Row>

      <div className="buy__pagination">
        <a href="/1" className="active">
          1
        </a>
        <a href="/2">2</a>
        <a href="/3">3</a>
        <a href="/..">...</a>
      </div>
    </Container>
  );
};

export default BuyPage;
