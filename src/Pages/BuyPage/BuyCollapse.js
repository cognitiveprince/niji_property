import React from "react";
import { Pagination } from "@mantine/core";
import { Container } from "react-bootstrap";
import BuyCollapseContent from "./BuyCollapseContent";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { Link } from "react-router-dom";
import "./BuyPage.scss";

const BuyCollapse = () => {
  return (
    <Container style={{ textAlign: "left" }}>
      <div className="buy__grid">
        <AllInclusiveIcon />{" "}
        <Link to="/buy">
          <p> Grid view </p>{" "}
        </Link>
      </div>
      <BuyCollapseContent />
      <BuyCollapseContent />
      <BuyCollapseContent />
      <BuyCollapseContent />
      <BuyCollapseContent />
      <div className="rent__pagination">
        <Pagination total={4} color="gray" />
      </div>
    </Container>
  );
};

export default BuyCollapse;
