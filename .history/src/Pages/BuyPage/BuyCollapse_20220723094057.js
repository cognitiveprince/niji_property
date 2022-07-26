import React, { useEffect } from "react";
import { Pagination } from "@mantine/core";
import { Container } from "react-bootstrap";
import BuyCollapseContent from "./BuyCollapseContent";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { Link } from "react-router-dom";
import "./BuyPage.scss";
import { useDispatch } from "react-redux";
import { getBuyContents } from "../../Redux/Actions/Actions";
import axios from "axios";
import BuyIcon from "./BuyIcon";

const BuyCollapse = () => {
  const dispatch = useDispatch();

  const fetchContent = async () => {
    const res = await axios
      .get(
        "https://nijiproperty-server.herokuapp.com/sellproperty/house/"
      )
      .catch((error) => {
        console.log(error);
      });
    dispatch(getBuyContents(res.data));
  };

  useEffect(() => {
    fetchContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={{ textAlign: "left" }}>
      <div className="buy__list">
        <div className="buy__desktop">
          <Link to="/buy">
            <AllInclusiveIcon />{" "}
          </Link>
          <p> Grid view </p>
        </div>
        <BuyIcon />
      </div>

      <BuyCollapseContent />

      <div className="rent__pagination">
        <Pagination total={4} color="gray" />
      </div>
    </Container>
  );
};

export default BuyCollapse;
