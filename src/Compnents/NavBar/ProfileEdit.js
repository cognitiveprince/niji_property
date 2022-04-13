import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./NavBar.scss";
import Setting from "./Setting";

const ProfileEdit = () => {
  const [active, setActive] = useState(false);
  const { currentUser } = useSelector((state) => state.setUser);

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
          <div className="nav__user__options">
            <span>Username</span>
            <input type="text" placeholder="Username" />
            <span>Email</span>
            <input type="text" value={currentUser.email} />
            <span>Choose Profile Picture</span>
            <input type="file" />
            <button>Save Changes</button>
            <button onClick={handleClick}>Go Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileEdit;
