import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Compnents/NavBar/NavBar";
import Footer from "./Compnents/Footer/Footer";
import BuyPage from "./Pages/BuyPage/BuyPage";
import HouseInfo from "./Pages/HouseInfo/HouseInfo";
import RentPage from "./Pages/RentPage/RentPage";
import SellPage from "./Pages/SellPage/SellPage";
import SellOption from "./Pages/SellPage/SellOption";
import SellInfo from "./Pages/SellPage/SellInfo";
import MapInfo from "./Pages/SellPage/MapInfo";
import HouseOffer from "./Pages/SellPage/HouseOffer";
import HouseImg from "./Pages/SellPage/HouseImg";
import PersonalInfo from "./Pages/SellPage/PersonalInfo";
import Publish from "./Pages/SellPage/Publish";
import RoomRentInfo from "./Pages/RoomRentPage/RoomRentInfo";
import BuyCollapse from "./Pages/BuyPage/BuyCollapse";
import Preview from "./Pages/HouseInfo/Preview";
import Development from "./Pages/Development/Development";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";
import { useDispatch } from "react-redux";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./Redux/Actions/Actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="app__container">
          <Routes>
            <Route path="/" element={<BuyPage />} exact />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/buycollapse" element={<BuyCollapse />} />
            <Route path="/buy/:buyID" element={<HouseInfo />} />
            <Route path="/rent" element={<RentPage />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/sell/selloption" element={<SellOption />} />
            <Route path="/rent/:rentID" element={<RoomRentInfo />} />
            <Route path="/sell/sellinfo" element={<SellInfo />} />
            <Route path="/sell/mapinfo" element={<MapInfo />} />
            <Route path="/sell/houseoffer" element={<HouseOffer />} />
            <Route path="/sell/houseimg" element={<HouseImg />} />
            <Route path="/sell/personalinfo" element={<PersonalInfo />} />
            <Route path="/sell/publish" element={<Publish />} />
            <Route path="/development" element={<Development />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
