import React, { useState } from "react";
import "./NavBar.scss";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Setting from "./Setting";
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.setUser);
  const [active, setActive] = useState(false);
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState(
    "https://firebasestorage.googleapis.com/v0/b/paradoxauth-56b93.appspot.com/o/uploads%2Findex.jpg?alt=media&token=c17e308e-cf88-404f-a105-659f2a90656a"
  );

  const handleClick = () => {
    setActive(!active);
  };

  if (currentUser) {
    getDoc(doc(db, "users", currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setUsername(docSnap.data().username);
        setPicture(docSnap.data().photo);
      } else {
        console.log("No such document!");
      }
    });
  }

  return (
    <>
      {active ? (
        <Setting username={username} picture={picture} />
      ) : (
        <div className="nav__user" style={{ marginTop: "30px" }}>
          <div className="nav__user__pic">
            <img src={picture} alt="user" />
            <p>{currentUser ? username : "user"}</p>
            <p></p>
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
