import React from "react";
import { Center } from "@mantine/core";
import { Button } from "react-bootstrap";
const Header = () => {
  return (
    <Center>
      <div className="develop__header__container">
        <div className="develop__header">
          <img
            src={require("../../Assets/filler1.png")}
            alt="koonya pavillion"
            className="develop__filler__first"
          />
          <h1> Making your dream come true with the </h1>
          <Button className="develop__btn" size="lg">
            Most Memories
          </Button>
        </div>
        <div className="develop__image">
          <img
            src={require("../../Assets/houseplan.png")}
            alt="koonya pavillion"
          />
          <img
            src={require("../../Assets/filler2.png")}
            alt="koonya pavillion"
            className="develop__filler__second"
          />
        </div>
      </div>
    </Center>
  );
};

export default Header;
