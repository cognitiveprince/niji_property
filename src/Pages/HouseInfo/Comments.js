import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import EastIcon from "@mui/icons-material/East";
import { Badge } from "@mantine/core";
const Comments = () => {
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
        <div className="comments__user__text">
          Would love to visit the house this Saturday, can I ?
        </div>
        <Badge style={{ backgroundColor: "#217FC4", color: "white" }}>
          Raju thapa
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
        <div className="comments__admin__text">
          Sorry, we are closed on Saturday.
        </div>
      </div>
    </div>
  );
};

export default Comments;
