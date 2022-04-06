import React from "react";
import { Row, Col } from "react-bootstrap";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Badge, Center } from "@mantine/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BuyCollapseContent = () => {
  const content = useSelector((state) => state.buyContentReducer.buyContent);
  const renderList = content.map((item) => {
    const { id, title, image, description, price } = item;
    return (
      <Row key={id}>
        <Center>
          <Col style={{ marginBottom: "20px" }}>
            <div className="buy__collapse__container">
              <div className="buy__collapse__image">
                <Link to={`/buy/${id}`}>
                  <img src={image} alt="koonya pavillion" />
                </Link>
              </div>

              <Col md={8}>
                <div className="buy__collapse__info">
                  <h1>{title}</h1>

                  <p>{description}</p>
                  <div className="buy__items">
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      3
                    </Badge>
                    <AirlineSeatIndividualSuiteIcon className="buy__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      4
                    </Badge>
                    <ShowerIcon className="buy__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      1,505
                    </Badge>
                    <LuggageIcon className="buy__icon" />
                  </div>
                </div>
              </Col>

              <Col md={7}>
                <div className="buy__collapse__price">
                  <h1>{price}</h1>
                </div>
              </Col>
            </div>
          </Col>
        </Center>
      </Row>
    );
  });

  return <>{renderList}</>;
};

export default BuyCollapseContent;
