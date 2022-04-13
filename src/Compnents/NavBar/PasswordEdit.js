import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./NavBar.scss";
import Setting from "./Setting";

const PasswordEdit = () => {
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
            <span>New Password</span>
            <input type="password" placeholder="Enter New Password" />
            <span>Old Password</span>
            <input type="password" placeholder="Enter Old Password" />
            <button>Save Changes</button>
            <button onClick={handleClick}>Go Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordEdit;
