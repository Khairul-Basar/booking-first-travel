import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelList from "./pages/hotelList/HotelList";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hotel-list" element={<HotelList />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
    </div>
  );
}

export default App;
