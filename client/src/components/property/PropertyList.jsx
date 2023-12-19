import React from "react";
import "./propertyList.css";

function PropertyList() {
  return (
    <div className="pListContainer">
      <div className="pListItem">
        <img
          src="https://i.ibb.co/z2r923K/477697253.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://i.ibb.co/cLgg8SL/6e8294d75f648eab2cd2818f0a40854367e584a5.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Apartments</h1>
          <h2>200 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.ibb.co/6WW87CS/477697253.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Resorts</h1>
          <h2>100 Resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.ibb.co/ySxD85L/506591607.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Villas</h1>
          <h2>290 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.ibb.co/rFqQkpz/240848933.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Cabins</h1>
          <h2>532 cabins</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
