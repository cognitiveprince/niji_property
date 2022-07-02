import React, { useState } from "react";
import "./NavBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginReset, logoutInitiate } from "../../Redux/Actions/Actions";
import { toast } from "react-toastify";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import PasswordEdit from "./PasswordEdit";

const Setting = ({ username, picture, toggle, toggleProfile }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.setUser);

  const [active, setActive] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const [editPasswordActive, setEditPasswordActive] = useState(false);

  /**
   * If the user is logged in, logoutInitiate() is called, loginReset() is called, active is set to the
   * opposite of what it was, and a toast is displayed.
   */
  const logout = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
      dispatch(loginReset());
      setActive(!active);
      toast("Logged Out Of The Account");
      toggle();
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
        <Profile toggle={toggle} toggleProfile={toggleProfile} />
      ) : (
        <>
          {editActive ? (
            <ProfileEdit
              username={username}
              picture={picture}
              toggle={toggle}
              toggleProfile={toggleProfile}
            />
          ) : (
            <>
              {editPasswordActive ? (
                <PasswordEdit
                  username={username}
                  picture={picture}
                  toggleProfile={toggleProfile}
                  toggle={toggle}
                />
              ) : (
                <div className="nav__user" style={{ marginTop: "30px" }}>
                  <div className="nav__close">
                    <div class="close" onClick={toggleProfile}></div>
                  </div>
                  <div className="nav__user__pic">
                    <img src={picture} alt="user" />
                    <p>{currentUser ? username : "email"}</p>
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
