import React, { useState, useCallback, useEffect } from "react";
import Logo from "../../Assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.scss";
import { Container } from "react-bootstrap";
import { Burger } from "@mantine/core";
import { Drawer, Collapse, Modal } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import Profile from "./Profile";
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { updateKeyword, searchLocation } from "../../Redux/Actions/Actions";
import BuyFilter from "../../Pages/BuyPage/BuyFilter";

const NavBar = () => {
  const [opened, setOpened] = useState(false);
  const [profileOpened, setProfileOpened] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(true);
  const [filterOpened, setFilterOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  const { currentUser } = useSelector((state) => state.setUser);
  const [picture, setPicture] = useState("");
  const [arrowClick, setArrowClick] = useState(false);

  const toggle = useCallback(() => setProfileOpened((o) => !o));
  const toggleProfile = useCallback(() => setProfileOpened(false));
  const filterToggle = useCallback(() => setFilterOpened((o) => !o));
  const arrowToggle = useCallback(() => setArrowClick((o) => !o));
  const [isCrossed1, setIsCrossed1] = useState(false);
  const [isCrossed2, setIsCrossed2] = useState(false);
  const [isCrossed3, setIsCrossed3] = useState(false);

  // create dispatcher instance
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) {
      setPicture(
        "https://res.cloudinary.com/dnfr5p8jc/image/upload/v1651814770/profile_c6bbm5.png"
      );
    }

    if (currentUser) {
      getDoc(doc(db, "users", currentUser.uid)).then((docSnap) => {
        if (docSnap.exists()) {
          if (docSnap.data().photo) {
            setPicture(docSnap.data().photo);
          }
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [currentUser]);

  const arrowClickHandler = () => {
    setFilterOpened(true);
    setArrowClick((o) => !o);
  };

  const closeFilter = () => {
    setFilterOpened(false);
    setArrowClick(false);
  };

  //live search
  const searchFetch = (keyword) => {
    // save to redux store
    dispatch(updateKeyword(keyword));
  };

  const labelFetch = (location) => {
    dispatch(searchLocation(location));
  };

  return (
    <div className="nav__main">
      {/* Nav Bar Image Nad Heading */}
      <div className="nav__brand">
        <Link to="/buy">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/buy">
          <h1>Niji Property</h1>
        </Link>
      </div>

      {/* Nav Bar Links */}
      <Container>
        <ToastContainer />
        <div className="nav__container">
          <div className="nav__left">
            <SearchIcon />
            <input
              type="text"
              onChange={(e) => searchFetch(e.target.value)}
              placeholder="Search location here"
            ></input>

            {arrowClick ? (
              <KeyboardArrowUpIcon
                className="nav__arrow"
                style={{ background: "#E5E5E5", color: "#222222" }}
                onClick={arrowClickHandler}
              />
            ) : (
              <KeyboardArrowDownIcon
                className="nav__arrow"
                style={{ background: "#E5E5E5", color: "#222222" }}
                onClick={arrowClickHandler}
              />
            )}

            <Modal
              opened={filterOpened}
              onClose={closeFilter}
              centered
              size="80%"
              transition="fade"
              transitionDuration={600}
              overlayOpacity={0.9}
              overflow="inside"
            >
              <BuyFilter
                filterToggle={filterToggle}
                arrowToggle={arrowToggle}
              />
            </Modal>
            {/* <Collapse in={filterOpened}>

            </Collapse> */}
          </div>

          <div className="nav__right">
            {/* Mobile Nav Bar */}

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
              <div className="nav__links__mobile">
                <NavLink to="/buy" onClick={() => setOpened(false)}>
                  Buy
                </NavLink>
                <NavLink to="/sell" onClick={() => setOpened(false)}>
                  Sell
                </NavLink>
                <NavLink to="/rent" onClick={() => setOpened(false)}>
                  Rent
                </NavLink>
                <NavLink to="/development" onClick={() => setOpened(false)}>
                  Development
                </NavLink>
                <button
                  className="navbar__profile"
                  onClick={() => setProfileOpened((o) => !o)}
                >
                  Login
                </button>

                <Collapse in={profileOpened}>
                  <Profile toggle={toggle} toggleProfile={toggleProfile} />
                </Collapse>
              </div>
            </Drawer>

            {/* Mobile Responsive Nav Bar Ends Here */}

            <div className="nav__links">
              <NavLink to="/buy">Buy</NavLink>
              <NavLink to="/sell">Sell</NavLink>

              <NavLink to="/rent">Rent</NavLink>

              <NavLink to="/development">Development</NavLink>

              <button
                className="navbar__profile"
                onClick={() => setProfileOpened((o) => !o)}
              >
                Login
              </button>

              <Collapse in={profileOpened}>
                <Profile toggle={toggle} toggleProfile={toggleProfile} />
              </Collapse>
            </div>
          </div>
        </div>
      </Container>

      <div className="tags_bar">
        <div
          className="label-search"
          style={{ display: isCrossed1 ? "none" : "" }}
        >
          <label
            onClick={(e) => {
              labelFetch(e.target.innerText);
            }}
          >
            Kathmandu
          </label>
          <button onClick={() => setIsCrossed1(!isCrossed1)}>x</button>
        </div>
        <div
          className="label-search"
          style={{ display: isCrossed2 ? "none" : "" }}
        >
          {}
          <label
            onClick={(e) => {
              labelFetch(e.target.innerText);
            }}
          >
            Lalitpur
          </label>
          <button onClick={() => setIsCrossed2(!isCrossed2)}>x</button>
        </div>
        <div
          className="label-search"
          style={{ display: isCrossed3 ? "none" : "" }}
        >
          <label
            onClick={(e) => {
              labelFetch(e.target.innerText);
            }}
          >
            Budhanilkanth
          </label>
          <button onClick={() => setIsCrossed3(!isCrossed3)}>x</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
