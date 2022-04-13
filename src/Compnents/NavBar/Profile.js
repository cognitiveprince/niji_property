import React, { useState } from "react";
import "./NavBar.scss";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Setting from "./Setting";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.setUser);

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      {active ? (
        <Setting />
      ) : (
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
              <img src="https://princelab.org/assets/theme.png" alt="user" />
              <Link to="/buy">
                <p>Home</p>
              </Link>
            </div>
            <div className="nav__user__items">
              <img src="https://princelab.org/assets/user.svg" alt="user" />
              {currentUser ? (
                <p onClick={handleClick}>Settings</p>
              ) : (
                <Link to="/login">
                  <p> Login</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
