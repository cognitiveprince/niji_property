import React from "react";
import { Row, Col } from "react-bootstrap";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import PeopleIcon from "@mui/icons-material/People";
import { Badge, Center } from "@mantine/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const RentContent = () => {
  const content = useSelector((state) => state.rentContentReducer.rentContent);
  const renderList = content.map((item) => {
    const { id, title, image, description, beds, showers, space, price } = item;
    return (
      <Row key={id}>
        <Center>
          <Col style={{ marginBottom: "20px" }}>
            <div className="rent__container">
              <div className="rent__image">
                <Link to={`/rent/${id}`}>
                  <img src={image} alt="koonya pavillion" />
                </Link>
              </div>

              <Col md={7}>
                <div className="rent__info">
                  <h1>{title}</h1>

                  <p> {description}</p>
                  <div className="buy__items">
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {beds}
                    </Badge>
                    <AirlineSeatIndividualSuiteIcon className="buy__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {showers}
                    </Badge>
                    <ShowerIcon className="buy__icon" />
                    <Badge
                      style={{ backgroundColor: "#EBEBEB", color: "black" }}
                    >
                      {space}
                    </Badge>
                    <PeopleIcon className="buy__icon" />
                  </div>
                </div>
              </Col>

              <Col md={2}>
                <div className="rent__price">
                  <h1>{price}</h1>
                  <p>/monthly</p>
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

export default RentContent;
