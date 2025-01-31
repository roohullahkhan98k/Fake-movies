import React from "react";
import "./CenteredContainer.css";

const CenteredContainer = ({ children, style }) => {
  return (
    <div className="centered-container" style={style}>
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default CenteredContainer;
