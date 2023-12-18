import React, { useState } from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faMagicWandSparkles,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "./header.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [optionOpen, setOptionOpen] = useState(false);

  function handleCountOperation(name, operation) {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  }

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMagicWandSparkles} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Wanderlust days and cozy nights</h1>
        <p className="headerDes">
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free BookingFirst accout.
        </p>
        <button className="headerButton">Sing in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="dateRange"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOptionOpen(!optionOpen)}
              className="headerSearchText"
            >
              {`${option.adult} adult . 
              ${option.children} children . 
              ${option.room} room`}
            </span>
            {optionOpen && (
              <div className="option">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionOpration">
                    <button
                      disabled={option.adult <= 1}
                      onClick={() => handleCountOperation("adult", "d")}
                      className="optionBtn"
                    >
                      -
                    </button>
                    <span className="optionCount">{option.adult}</span>
                    <button
                      onClick={() => handleCountOperation("adult", "i")}
                      className="optionBtn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionOpration">
                    <button
                      disabled={option.children <= 0}
                      onClick={() => handleCountOperation("children", "d")}
                      className="optionBtn"
                    >
                      -
                    </button>
                    <span className="optionCount">{option.children}</span>
                    <button
                      onClick={() => handleCountOperation("children", "i")}
                      className="optionBtn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionOpration">
                    <button
                      disabled={option.room <= 1}
                      onClick={() => handleCountOperation("room", "d")}
                      className="optionBtn"
                    >
                      -
                    </button>
                    <span className="optionCount">{option.room}</span>
                    <button
                      onClick={() => handleCountOperation("room", "i")}
                      className="optionBtn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
