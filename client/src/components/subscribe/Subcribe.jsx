import React from "react";
import "./subscribe.css";

function Subcribe() {
  return (
    <div className="subContainer">
      <h1 className="subTitle">Save time, save money!</h1>
      <span className="subDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="subInputBtn">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Subcribe;
