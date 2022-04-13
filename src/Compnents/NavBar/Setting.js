import React, { useState } from "react";
import "./NavBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginReset, logoutInitiate } from "../../Redux/Actions/Actions";
import { toast } from "react-toastify";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import PasswordEdit from "./PasswordEdit";

const Setting = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.setUser);

  const [active, setActive] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const [editPasswordActive, setEditPasswordActive] = useState(false);

  const logout = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
      dispatch(loginReset());
      setActive(!active);
      toast("Logged Out Of The Account");
    }
  };

  const handleClick = () => {
    setActive(!active);
  };

  const handleEditClick = () => {
    setEditActive(!editActive);
  };

  const handleEditPasswordClick = () => {
    setEditPasswordActive(!editPasswordActive);
  };

  return (
    <>
      {active ? (
        <Profile />
      ) : (
        <>
          {editActive ? (
            <ProfileEdit />
          ) : (
            <>
              {editPasswordActive ? (
                <PasswordEdit />
              ) : (
                <div className="nav__user" style={{ marginTop: "30px" }}>
                  <div className="nav__user__pic">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/paradoxauth-56b93.appspot.com/o/uploads%2Findex.jpg?alt=media&token=c17e308e-cf88-404f-a105-659f2a90656a"
                      alt="user"
                    />
                    <p>{currentUser ? currentUser.email : "email"}</p>
                  </div>
                  <div className="nav__user__button">
                    <button className="edit__btn" onClick={handleEditClick}>
                      Edit Profile
                    </button>
                    <button
                      className="edit__btn"
                      onClick={handleEditPasswordClick}
                    >
                      Change Password
                    </button>
                    <button className="edit__btn" onClick={logout}>
                      Sign Out
                    </button>
                    <button className="edit__btn" onClick={handleClick}>
                      Go Back
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Setting;
