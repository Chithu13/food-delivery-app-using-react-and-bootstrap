/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const SProduct = ({Image, Description}) => {
  return (
    <div className="card shadow-sm">
      <img src={Image} alt="" style={{height: "200px"}}/>
      <div className="card-body">
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default SProduct;