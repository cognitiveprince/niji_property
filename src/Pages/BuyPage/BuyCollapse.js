import React, { useEffect,useState } from "react";
import { Container } from "react-bootstrap";
import BuyCollapseContent from "./BuyCollapseContent";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { Link } from "react-router-dom";
import "./BuyPage.scss";
import { useDispatch,useSelector } from "react-redux";
import { getBuyContents } from "../../Redux/Actions/Actions";
import axios from "axios";
import BuyIcon from "./BuyIcon";
import Paginate from "./Pagination";

const BuyCollapse = () => {
  const dispatch = useDispatch();
  // const fetchContent = async () => {
  //   const res = await axios
  //     .get(
  //       "https://nijiproperty-server.herokuapp.com/sellproperty/house/"
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   dispatch(getBuyContents(res.data));
  // };

  // useEffect(() => {
  //   fetchContent();
  // }, []);

  const content = useSelector((state) => state.buyContentReducer.buyContent);
  const [currentPage, setCurrentPage] = useState(1);
  const search_keyword = useSelector((state) => state.keywordChange);
  
  const filteredData = content.data && content.data.filter(data => {
    return data.location.toUpperCase().includes(search_keyword.toUpperCase());
  }) 
  const postPerPage = 8;
  const totalPosts = filteredData?.length;
  console.log(totalPosts)
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const filterPosts = filteredData?.slice(indexOfFirstPost, indexOfLastPost);

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

      <BuyCollapseContent filteredData={filterPosts} />
      <Paginate  currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalPosts={totalPosts}
							postPerPage={postPerPage}/>

       
    </Container>
  );
};

export default BuyCollapse;
