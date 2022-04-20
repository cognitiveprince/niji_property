import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import EastIcon from "@mui/icons-material/East";
import { Badge } from "@mantine/core";
import { useSelector } from "react-redux";
const Comments = () => {
  const content = useSelector((state) => state.buyInfoReducer);
  const { comments, user, reply } = content;
  return (
    <div className="houseinfo__comments__content">
      <div className="comments__user">
        <div className="comments__user__icon">
          <CircleIcon
            style={{
              width: "12px",
              height: "12px",
              color: "#f27000",
            }}
          />
        </div>
        <div className="comments__user__text">{comments}</div>
        <Badge
          style={{ backgroundColor: "#217FC4", color: "white" }}
          className="house__comment"
        >
          {user}
        </Badge>
      </div>

      <div className="comments__admin">
        <div className="comments__admin__icon">
          <EastIcon
            style={{
              width: "50px",
              height: "16px",
              color: "#353DFC",
            }}
          />
        </div>
        <div className="comments__admin__text">{reply}</div>
      </div>
    </div>
  );
};

export default Comments;
