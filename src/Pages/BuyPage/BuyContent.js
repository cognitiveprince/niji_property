import React from "react";
import { Link } from "react-router-dom";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Col } from "react-bootstrap";
import { Badge, Center } from "@mantine/core";
import { useSelector } from "react-redux";

const BuyContent = () => {
  const content = useSelector((state) => state.buyContentReducer.buyContent);
  const { loading } = useSelector((state) => state.buyContentReducer);
  const renderList = content.map((item) => {
    const { id, title, image, description, beds, showers, parking } = item;
    return (
      <Col key={id} md={3}>
        <div className="buy__content__container">
          <Center>
            <div className="buy__image">
              <Link to={`/buy/${id}`}>
                <img src={image} alt={title} />
              </Link>
            </div>
          </Center>
          <div className="buy__content">
            <h1>{title}</h1>
            <p> {description}</p>
            <div className="buy__items">
              <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                {beds}
              </Badge>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                {showers}
              </Badge>
              <ShowerIcon className="buy__icon" />
              <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                {parking}
              </Badge>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </div>
      </Col>
    );
  });

  return <>{loading ? <div className="loader"></div> : renderList}</>;
};

export default BuyContent;
