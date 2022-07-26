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
  console.log(content)
  const renderList = content.results.map((item) => {
    
    const { id, title, images, description, bedroom, bathroom, parking_sapce, location } = item;
    return (
      <Row key={id}>
        <Center>
          <Col style={{ marginBottom: "20px" }}>
            <div className="buy__collapse__container">
              <div className="buy__collapse__image">
                <Link to={`/buy/${id}`}>
                  <img src={images[0].image} alt="koonya pavillion" />
                </Link>
              </div>

              <Col md={7}>
                <div className="buy__collapse__info">
                  <h1>{title}</h1>

                  <p>{description}</p>
                  <div className="buy__items">
                    <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                      {bedroom}
                    </Badge>
                    <AirlineSeatIndividualSuiteIcon className="buy__icon" />
                    <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                      {bathroom}
                    </Badge>
                    <ShowerIcon className="buy__icon" />
                    <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                      {parking_sapce}
                    </Badge>
                    <LuggageIcon className="buy__icon" />
                  </div>
                </div>
              </Col>

              <Col md={2}>
                <div className="buy__collapse__price">
                  <h1>{1343443}</h1>
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
