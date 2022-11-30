import React, { useEffect } from "react";
import RentContent from "./RentContent";
import { Pagination } from "@mantine/core";
import { Container } from "react-bootstrap";
import "./RentPage.scss";
import { useDispatch } from "react-redux";
import { getRentContents } from "../../Redux/Actions/Actions";
import axios from "axios";

const RentPage = () => {
  const dispatch = useDispatch();

  const fetchContent = async () => {
    const res = await axios
      .get("https://nijiproperty-server.herokuapp.com/sellproperty/house/")
      .catch((error) => {
        console.log(error);
      });
    dispatch(getRentContents(res.data));
  };

  useEffect(() => {
    fetchContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={{ textAlign: "left" }}>
      <RentContent />
      {/* <div className="rent__pagination">
        <Pagination total={4} color="gray" />
      </div> */}
    </Container>
  );
};

export default RentPage;
