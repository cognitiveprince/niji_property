import React, { useState } from "react";
import "./NavBar.scss";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Setting from "./Setting";
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";

const Profile = ({ toggle, toggleProfile }) => {
  /* Getting the current user from the redux store. */
  const { currentUser } = useSelector((state) => state.setUser);
  const [active, setActive] = useState(false);
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState(
    "https://res.cloudinary.com/dnfr5p8jc/image/upload/v1651814770/profile_c6bbm5.png"
  );

  const handleClick = () => {
    setActive(!active);
  };

  if (currentUser) {
    getDoc(doc(db, "users", currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setUsername(docSnap.data().username);
        if (docSnap.data().photo) {
          setPicture(docSnap.data().photo);
        }
      } else {
        console.log("No such document!");
      }
    });
  }

  return (
    <>
      {active ? (
        <Setting
          username={username}
          picture={picture}
          toggle={toggle}
          toggleProfile={toggleProfile}
        />
      ) : (
        <div className="nav__user" style={{ marginTop: "30px" }}>
          <div className="nav__close">
            <div className="close" onClick={toggleProfile}></div>
          </div>
          <div className="nav__user__pic">
            <img src={picture} alt="user" />
            <p>{currentUser ? username : "user"}</p>
            <p></p>
          </div>
          <div className="nav__user__links">
            <div className="nav__user__items">
              <img src="https://princelab.org/assets/theme.png" alt="user" />
              <Link to="/buy" onClick={toggle}>
                <p>Home</p>
              </Link>
            </div>
            <div className="nav__user__items">
              <img src="https://princelab.org/assets/user.svg" alt="user" />
              {currentUser ? (
                <p onClick={handleClick}>Settings</p>
              ) : (
                <Link to="/login" onClick={toggle}>
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
