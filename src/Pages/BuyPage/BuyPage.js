import React, { useEffect } from "react";
import "./BuyPage.scss";
import { Container, Row } from "react-bootstrap";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Pagination } from "@mantine/core";
import { Link } from "react-router-dom";
import BuyContent from "./BuyContent";
import { useDispatch } from "react-redux";
import { getBuyContents } from "../../Redux/Actions/Actions";
import axios from "axios";

const BuyPage = () => {
  const dispatch = useDispatch();

  const fetchContent = async () => {
    const res = await axios
      .get(
        "https://my-json-server.typicode.com/realswikarrr/niji-json/buyContent"
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
    <Container>
      <div className="buy__list">
        <DragHandleIcon />{" "}
        <Link to="/buycollapse">
          <p> List view </p>{" "}
        </Link>
      </div>

      <Row>
        <BuyContent />
      </Row>

      <div className="buy__pagination">
        <Pagination total={4} color="gray" />
      </div>
    </Container>
  );
};

export default BuyPage;
