import React from "react";
import Logo from "../../Assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="nav__main">
      {/* Nav Bar Image Nad Heading */}
      <div className="nav__brand">
        <img src={Logo} alt="logo" />
        <h1>Niji property</h1>
      </div>

      {/* Nav Bar Links */}
      <Container>
        <div className="nav__container">
          <div className="nav__left">
            <SearchIcon />
            <input type="text" placeholder="Search location here"></input>
            <KeyboardArrowDownIcon
              style={{ background: "#E5E5E5", color: "#222222" }}
            />
          </div>
          <div className="nav__right">
            <Link to="/" className="active">
              Buy
            </Link>
            <a href="/sell">Sell</a>

            <Link to="/rent">Rent</Link>

            <a href="/development">Development</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
