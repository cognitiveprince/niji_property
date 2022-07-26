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
import "react-toastify/dist/ReactToastify.css";
import BuyIcon from "./BuyIcon";

const BuyPage = () => {
  const dispatch = useDispatch();

  /**
   * The function fetches data from the server and then dispatches the data to the reducer.
   */
  const fetchContent = async () => {
    const res = await axios.get("https://nijiproperty-server.herokuapp.com/sellproperty/house/", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });

    console.log(res.data)
    dispatch(getBuyContents(res.data));
  };

  useEffect(() => {
    fetchContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="buy__list">
        <div className="buy__desktop">
          <Link to="/buycollapse">
            <DragHandleIcon />{" "}
          </Link>
          <p> List view </p>
        </div>
        <BuyIcon />
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
