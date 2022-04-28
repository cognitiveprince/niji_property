import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BuyFilter = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="buy__filter__container">
      <div className="buy__filter__title">
        <h1>Filter in Your Way</h1>
      </div>

      <div className="buy__filter__content">
        <h1>Built Date</h1>
        <div className="buy__filter__date">
          <DatePicker selected={startDate} onChange={setStartDate} />
        </div>
      </div>

      <div className="buy__filter__content">
        <h1>Location</h1>
        <div className="buy__filter__input">
          <input type="text" placeholder="location" />
        </div>
      </div>

      <div className="buy__filter__content">
        <h1>Price range</h1>
        <div className="buy__filter__input">
          <input type="text" placeholder="pricerange" />
        </div>
      </div>

      <div className="buy__filter__content">
        <h1>House type</h1>
        <div className="buy__filter__input">
          <input type="text" placeholder="housetype" />
        </div>
      </div>

      <div className="buy__filter__button">
        <Row>
          <Col md={6}>
            <Button variant="dark" size="lg">
              Clear
            </Button>
          </Col>
          <Col md={6}>
            <Button variant="primary" size="lg">
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BuyFilter;
