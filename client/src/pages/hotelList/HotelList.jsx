import React, { useState } from "react";
import "./hotelList.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

function HotelList() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="hotelListContainer">
        <div className="hListWrapper">
          <div className="hListSearch">
            <h1 className="hListTitle">Search</h1>
            <div className="hListItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="hListItem">
              <label>Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="checkInDate"
              >
                {format(date[0].startDate, "MM/dd/yyyy")} to
                {format(date[0].endDate, "MM/dd/yyyy")}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className="dateRange"
                />
              )}
            </div>
            <div className="hListItem">
              <label>Options</label>
              <div className="hListOptions">
                <div className="hListOptionItem">
                  <span className="hListOptionText">
                    Min price <small>per night</small>{" "}
                  </span>
                  <input min={0} type="number" className="hListOptionInput" />
                </div>
                <div className="hListOptionItem">
                  <span className="hListOptionText">
                    Max price <small>per night</small>{" "}
                  </span>
                  <input min={0} type="number" className="hListOptionInput" />
                </div>
                <div className="hListOptionItem">
                  <span className="hListOptionText">Adult</span>
                  <input
                    placeholder={location.state.option.adult}
                    min={1}
                    type="number"
                    className="hListOptionInput"
                  />
                </div>
                <div className="hListOptionItem">
                  <span className="hListOptionText">Children</span>
                  <input
                    placeholder={location.state.option.children}
                    min={0}
                    type="number"
                    className="hListOptionInput"
                  />
                </div>
                <div className="hListOptionItem">
                  <span className="hListOptionText">Room</span>
                  <input
                    placeholder={location.state.option.room}
                    min={1}
                    type="number"
                    className="hListOptionInput"
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="hListResult"></div>
        </div>
      </div>
    </div>
  );
}

export default HotelList;
