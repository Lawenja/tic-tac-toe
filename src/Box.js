import React from "react";

const Box = ({ value, handleClick }) => {
  return <div className="box" onClick={handleClick}>{value}</div>;
};

export default Box;
