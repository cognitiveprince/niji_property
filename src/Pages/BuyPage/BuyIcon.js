import React from "react";
import "./BuyPage.scss";
import { NavLink } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";

const BuyIcon = () => {
  return (
    <>
      <div className="buy__icon__container">
        <NavLink to="/buy">
          <div className="buy__icon__first">
            <GridViewIcon />
          </div>
        </NavLink>
        <NavLink to="/buycollapse">
          <div className="buy__icon__second">
            <SplitscreenOutlinedIcon />
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default BuyIcon;
