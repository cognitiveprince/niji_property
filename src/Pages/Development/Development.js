import React from "react";

import "./Development.scss";
import { Container } from "react-bootstrap";
import DevelopmentBody from "./DevelopmentBody";
import Skills from "./Skills";
import Header from "./Header";
import DevelopmentFooter from "./DevelopmentFooter";

const Development = () => {
  return (
    <Container>
      <Header />
      <DevelopmentBody />
      <Skills />
      <DevelopmentFooter />
    </Container>
  );
};

export default Development;
