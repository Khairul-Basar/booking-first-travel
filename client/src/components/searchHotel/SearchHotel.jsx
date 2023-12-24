import React from "react";
import "./searchHotel.css";

function SearchHotel() {
  return (
    <div className="searchHotelContainer">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="shImg"
      />
      <div className="shDec">
        <h1 className="shTitle">Tower Street Apartments</h1>
        <span className="shDistance">500 from center</span>
        <span className="shTaxiOp">Free airport taxi</span>
        <span className="shSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="shFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="shFreeCancel">Free cancellation </span>
        <span className="shFreeCancelSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="shDetails">
        <div className="shRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="shDetailTexts">
          <span className="shPrice">$112</span>
          <span className="shTaxOp">Includes taxes and fees</span>
          <button className="shCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchHotel;
