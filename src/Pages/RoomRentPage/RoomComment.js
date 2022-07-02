import React from "react";
import { ScrollArea } from "@mantine/core";
import { Button } from "react-bootstrap";
import Comment from "./Comment";

const RoomComment = () => {
  return (
    <div className="houseinfo__comments" style={{ width: "96%" }}>
      <div style={{ fontSize: "24px", textAlign: "left" }}>Comments</div>

      <div className="houseinfo__comments__container">
        <ScrollArea style={{ height: "250px" }}>
          {/* HTML FOR THE COMMENTS VISUAL  */}
          <Comment />
          <Comment />
          <Comment />
          {/* HTML FOR THE COMMENTS VISUAL ENDS HERE */}
        </ScrollArea>
      </div>

      <div className="houseinfo__comments__button">
        <Button
          variant="outline-dark"
          size="lg"
          style={{
            float: "right",
            fontWeight: "bold",
            fontSize: "15px",
            marginTop: "20px",
          }}
        >
          ASK QUESTION
        </Button>
      </div>
    </div>
  );
};

export default RoomComment;
