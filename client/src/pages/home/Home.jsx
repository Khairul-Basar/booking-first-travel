import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import "./home.css";
import PropertyList from "../../components/property/PropertyList";
import GuestsLove from "../../components/guestsLove/GuestsLove";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeFeaturedContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <GuestsLove />
      </div>
    </div>
  );
}

export default Home;
