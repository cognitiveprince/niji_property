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

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="app__container">
          <Routes>
            <Route path="/" element={<BuyPage />} exact />
            <Route path="/houseinfo" element={<HouseInfo />} />
            <Route path="/rent" element={<RentPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/selloption" element={<SellOption />} />
            <Route path="/sellinfo" element={<SellInfo />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
