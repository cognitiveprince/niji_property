import React, { useState,useEffect } from "react";
import "./BuyPage.scss";
import { Container, Row } from "react-bootstrap";
import DragHandleIcon from "@mui/icons-material/DragHandle";
// import { Pagination } from "@mantine/core";
import { Link } from "react-router-dom";
// import Pagination from "./Pagination";
import BuyContent from "./BuyContent";
import { useDispatch } from "react-redux";
import { getBuyContents } from "../../Redux/Actions/Actions";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import BuyIcon from "./BuyIcon";
import Paginate from "./Pagination";


const BuyPage = () => {
   
  const dispatch = useDispatch();

  const fetchContent = async () => {
    const res = await axios.get("https://nijiproperty-server.herokuapp.com/sellproperty/house/");

    dispatch(getBuyContents(res.data));
     
  };

  useEffect(() => {
    fetchContent();
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
        <Paginate/>
         
      </Row>

            
    </Container>
  );
};

export default BuyPage;
