import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./NavBar.scss";
import Setting from "./Setting";
import { toast } from "react-toastify";
import { updatePassword } from "firebase/auth";

const PasswordEdit = ({ username, picture }) => {
  const [active, setActive] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const { currentUser } = useSelector((state) => state.setUser);

  const handleClick = () => {
    setActive(!active);
  };

  /**
   * If the new password and the new password confirmation match, then set the active state to false,
   * set the new password and new password confirmation to an empty string, update the password, and
   * display a success message. Otherwise, display an error message.
   */
  const submitHandler = () => {
    if (newPassword === newPasswordConfirm) {
      setActive(!active);
      setNewPassword("");
      setNewPasswordConfirm("");
      updatePassword(currentUser, newPassword);
      toast.success("Password Updated");
    } else {
      toast.error("Passwords Do Not Match");
    }
  };

  return (
    <>
      {active ? (
        <Setting username={username} picture={picture} />
      ) : (
        <div className="nav__user" style={{ marginTop: "30px" }}>
          <div className="nav__user__pic">
            <img src={picture} alt="user" />
            <p>{currentUser ? username : "email"}</p>
          </div>
          <div className="nav__user__options">
            <span>New Password</span>
            <input
              type="password"
              placeholder="Enter New Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span>Retype Password</span>
            <input
              type="password"
              placeholder="Retype New Password"
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
            />
            <button onClick={submitHandler}>Save Changes</button>
            <button onClick={handleClick}>Go Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordEdit;
