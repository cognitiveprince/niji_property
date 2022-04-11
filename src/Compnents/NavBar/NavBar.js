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
import { useDispatch, useSelector } from "react-redux";
import { loginReset, logoutInitiate } from "../../Redux/Actions/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [opened, setOpened] = useState(false);
  const [profileOpened, setProfileOpened] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(true);
  const title = opened ? "Close navigation" : "Open navigation";

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.setUser);

  const logout = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
      dispatch(loginReset());
      setProfileOpened((o) => !o);
      toast("Logged Out Of The Account");
    }
  };

  return (
    <div className="nav__main">
      {/* Nav Bar Image Nad Heading */}
      <div className="nav__brand">
        <img src={Logo} alt="logo" />
        <h1>Niji property</h1>
      </div>

      {/* Nav Bar Links */}
      <Container>
        <ToastContainer />
        <div className="nav__container">
          <div className="nav__left">
            <SearchIcon />
            <input type="text" placeholder="Search location here"></input>
            <KeyboardArrowDownIcon
              style={{ background: "#E5E5E5", color: "#222222" }}
            />
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
                <Button onClick={() => setProfileOpened((o) => !o)}>
                  Profile
                </Button>

                <Collapse in={profileOpened}>
                  <div className="nav__user" style={{ marginTop: "30px" }}>
                    <div className="nav__user__pic">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/paradoxauth-56b93.appspot.com/o/uploads%2Findex.jpg?alt=media&token=c17e308e-cf88-404f-a105-659f2a90656a"
                        alt="user"
                      />
                      <p>{currentUser ? currentUser.email : "email"}</p>
                    </div>
                    <div className="nav__user__links">
                      <div className="nav__user__items">
                        <img
                          src="https://princelab.org/assets/theme.png"
                          alt="user"
                        />
                        <Link to="/buy" onClick={() => setOpened(false)}>
                          <p>Home</p>
                        </Link>
                      </div>
                      <div className="nav__user__items">
                        <img
                          src="https://princelab.org/assets/user.svg"
                          alt="user"
                        />
                        {currentUser ? (
                          <p onClick={logout}>Logout</p>
                        ) : (
                          <Link to="/login" onClick={() => setOpened(false)}>
                            <p> Login</p>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </Drawer>

            {/* Mobile Responsive Nav Bar Ends Here */}

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
                <div className="nav__user" style={{ marginTop: "30px" }}>
                  <ToastContainer />
                  <div className="nav__user__pic">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/paradoxauth-56b93.appspot.com/o/uploads%2Findex.jpg?alt=media&token=c17e308e-cf88-404f-a105-659f2a90656a"
                      alt="user"
                    />
                    <p>{currentUser ? currentUser.email : "email"}</p>
                  </div>
                  <div className="nav__user__links">
                    <div className="nav__user__items">
                      <img
                        src="https://princelab.org/assets/theme.png"
                        alt="user"
                      />
                      <Link
                        to="/buy"
                        onClick={() => setProfileOpened((o) => !o)}
                      >
                        <p>Home</p>
                      </Link>
                    </div>
                    <div className="nav__user__items">
                      <img
                        src="https://princelab.org/assets/user.svg"
                        alt="user"
                      />
                      {currentUser ? (
                        <p onClick={logout}>Logout</p>
                      ) : (
                        <Link
                          to="/login"
                          onClick={() => setProfileOpened((o) => !o)}
                        >
                          <p> Login</p>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
