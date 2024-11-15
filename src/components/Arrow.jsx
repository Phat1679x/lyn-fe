import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Arrow = ({ direction, onClick }) => {
  const icon = direction === "next" ? faAngleRight : faAngleLeft;
  const positionStyle =
    direction === "next" ? { right: "10px" } : { left: "10px" };

  return (
    <div
      className="custom-arrow"
      style={{
        ...positionStyle,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        padding: "10px",
        borderRadius: "50%",
        color: "white",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default Arrow;
