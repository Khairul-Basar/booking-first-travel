import React from "react";
import "./featured.css";

function Featured() {
  return (
    <div className="propertyContainer">
      <div className="propertyItem">
        <img
          src="https://i.ibb.co/m0FKTZD/aripata.webp"
          alt=""
          className="propertyImg"
        />
        <div className="propertyTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://i.ibb.co/X8ZNhWJ/690334.webp"
          alt=""
          className="propertyImg"
        />
        <div className="propertyTitles">
          <h1>Austin</h1>
          <h2>532 Properties</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://i.ibb.co/hFM5W2W/689422.webp"
          alt=""
          className="propertyImg"
        />
        <div className="propertyTitles">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
