import { Center } from "@mantine/core";
import React from "react";
import { Button } from "react-bootstrap";

const DevelopmentFooter = () => {
  return (
    <Center>
      <div className="development__footer">
        <div className="development__footer__container">
          <Center>
            <h1>Let's build your dream</h1>
          </Center>
          <p>
            Call or message us at our official social medias. <br /> You can
            also visit our office if you wanna <br /> Meet us in person
          </p>
          <div className="development__footer__container__social">
            <Button>Call</Button>{" "}
            <Button style={{ background: "#8900FF" }}>Message</Button>
            <img
              src={require("../../Assets/facebook.png")}
              alt="koonya pavillion"
            />
            <img
              src={require("../../Assets/instagram.png")}
              alt="koonya pavillion"
            />
            <img
              src={require("../../Assets/twitter.png")}
              alt="koonya pavillion"
            />
          </div>
        </div>
      </div>
    </Center>
  );
};

export default DevelopmentFooter;
