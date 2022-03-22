import React from "react";
import RentContent from "./RentContent";
import { Pagination } from "@mantine/core";
import { Container } from "react-bootstrap";
import "./RentPage.scss";

const RentPage = () => {
  return (
    <Container style={{ textAlign: "left" }}>
      <RentContent />
      <RentContent />
      <RentContent />
      <RentContent />
      <RentContent />
      <div className="rent__pagination">
        <Pagination total={4} color="gray" />
      </div>
    </Container>
  );
};

export default RentPage;
