import React, { useEffect,useState } from "react";
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
import Paginate from "./Pagination";
import { useSelector } from "react-redux";
import "./Pagination.css";

const BuyPage = () => {
  const dispatch = useDispatch();

  const fetchContent = async () => {
    const res = await axios.get("https://nijiproperty-server.herokuapp.com/sellproperty/house/");

    dispatch(getBuyContents(res.data));
  };

  useEffect(() => {
    fetchContent();
  }, []);
  
//   const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const content = useSelector((state) => state.buyContentReducer.buyContent);
  const search_keyword = useSelector((state) => state.keywordChange);
  
  const filteredData = content.results && content.results.filter(data => {
    return data.location.toUpperCase().includes(search_keyword.toUpperCase());
  }) 
  const postPerPage = 8;
  const totalPosts = filteredData.length;
  console.log(totalPosts)
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const filterPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

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
        <BuyContent filteredData={filterPosts} />
        <Paginate  currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalPosts={totalPosts}
							postPerPage={postPerPage}/>
      </Row>

      {/* <div className="buy__pagination">
        <Pagination total={4} color="gray" />
      </div> */}

      
    </Container>
  );
};

export default BuyPage;