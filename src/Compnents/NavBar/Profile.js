import React from "react";
import "./NavBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginReset, logoutInitiate } from "../../Redux/Actions/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useState, useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.setUser);

  const logout = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
      dispatch(loginReset());
      toast("Logged Out Of The Account");
    }
  };

  return (
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
          <img src="https://princelab.org/assets/theme.png" alt="user" />
          <Link to="/buy">
            <p>Home</p>
          </Link>
        </div>
        <div className="nav__user__items">
          <img src="https://princelab.org/assets/user.svg" alt="user" />
          {currentUser ? (
            <p onClick={logout}>Logout</p>
          ) : (
            <Link to="/login">
              <p> Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
