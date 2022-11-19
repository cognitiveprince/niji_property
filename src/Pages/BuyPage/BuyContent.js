import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import ShowerIcon from "@mui/icons-material/Shower";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Col,Row,Container } from "react-bootstrap";
import { Badge, Center } from "@mantine/core";
import { useSelector } from "react-redux";
import Paginate from "./Pagination";

const BuyContent = () => {
  const content = useSelector((state) => state.buyContentReducer.buyContent);
  

  // fetch search keyword from redux store
  const search_keyword = useSelector((state) => state.keywordChange);
  
  const { loading } = useSelector((state) => state.buyContentReducer);
  const [currentPage, setCurrentPage] = useState(1);
   

   
  
  
  // filter out the data based on search keyword on each key press
  const filteredData = content.results && content.results.filter(data => {
    return data.location.toUpperCase().includes(search_keyword.toUpperCase());
  }) 

  // console.log(filteredData.length)
  
  // const postPerPage = 8;
	// const totalPosts = filteredData.length;
  // console.log(totalPosts)
	// const indexOfLastPost = currentPage * postPerPage;
	// const indexOfFirstPost = indexOfLastPost - postPerPage;
	// const filterPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  // const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
	const totalPosts = filteredData.length;
  console.log(totalPosts)
	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const filterPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  // render filterout data
  const renderList = content.results && filterPosts.map((item) => {
    const { id, title, images, description, bedroom, bathroom, parking_sapce,location } = item;

  
  

    return (
      
      <Col key={id} md={3}>
        <div className="buy__content__container">
          <Center>
            <div className="buy__image">
              <Link to={`/buy/${id}`}>
                <img src={images.length < 0 ? "https://nepalhomesearch.com/wp-content/uploads/2020/07/budhanilkantha-71.jpg":images[0].image} alt={title} />
              </Link>
            </div>
          </Center>
          <div className="buy__content">
            <h1>{title}</h1>
            <p>{location}</p>
            <p> {description}</p>
            <div className="buy__items">
              <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                {bedroom}
              </Badge>
              <AirlineSeatIndividualSuiteIcon className="buy__icon" />
              <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                {bathroom}
              </Badge>
              <ShowerIcon className="buy__icon" />
              <Badge style={{ backgroundColor: "#EBEBEB", color: "black" }}>
                {parking_sapce}
              </Badge>
              <LuggageIcon className="buy__icon" />
            </div>
          </div>
        </div>
        
      </Col>
      
    //  {totalPosts > postPerPage && (
		// 				<Paginate
		// 					currentPage={currentPage}
		// 					setCurrentPage={setCurrentPage}
		// 					totalPosts={totalPosts}
		// 					postPerPage={postPerPage}
		// 				/>
		// 			)} 
  
          
            
            
   
        
    );
  });

  return <>{loading ? <div className="loader"></div> : renderList }</>;
};

export default BuyContent;
