import React, { useState } from "react";
import Logo from "../../Assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { Container } from "react-bootstrap";
import { Burger } from "@mantine/core";
import { Drawer, Collapse } from "@mantine/core";
import { Button } from "@mantine/core";

import Profile from "./Profile";

const NavBar = () => {
  const [opened, setOpened] = useState(false);
  const [profileOpened, setProfileOpened] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(true);
  const title = opened ? "Close navigation" : "Open navigation";

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
            <Burger
              opened={opened}
              onClick={() => {
                setOpened((o) => !o);
                setDrawerOpened(true);
              }}
              title={title}
              className="nav__burger"
            />

            <Drawer
              opened={opened}
              onClose={() => setOpened(false)}
              padding="xl"
              size="xl"
            >
              <div
                className="nav__links__mobile"
                onClick={() => setOpened(false)}
              >
                <NavLink to="/buy">Buy</NavLink>
                <NavLink to="/sell">Sell</NavLink>
                <NavLink to="/rent">Rent</NavLink>
                <NavLink to="/development">Development</NavLink>
                <Button onClick={() => setProfileOpened((o) => !o)}>
                  Profile
                </Button>

                <Collapse in={profileOpened}>
                  <Profile />
                </Collapse>
              </div>
            </Drawer>
            <div className="nav__links">
              <NavLink to="/buy">Buy</NavLink>
              <NavLink to="/sell">Sell</NavLink>

              <NavLink to="/rent">Rent</NavLink>

              <NavLink to="/development">Development</NavLink>

              <Button
                onClick={() => setProfileOpened((o) => !o)}
                style={{ background: "black" }}
              >
                Profile
              </Button>

              <Collapse in={profileOpened}>
                <Profile />
              </Collapse>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
