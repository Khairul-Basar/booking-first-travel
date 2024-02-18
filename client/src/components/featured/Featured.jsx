import React from "react";
import "./featured.css";
import useFetch from "../../hooks/useFetch";

function Featured() {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countbycity?cities=berlin,Dubai,Lisbone"
  );
  return (
    <div className="propertyContainer">
      {loading ? (
        "Loading...."
      ) : (
        <>
          <div className="propertyItem">
            <img
              src="https://i.ibb.co/m0FKTZD/aripata.webp"
              alt=""
              className="propertyImg"
            />
            <div className="propertyTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="propertyItem">
            <img
              src="https://i.ibb.co/X8ZNhWJ/690334.webp"
              alt=""
              className="propertyImg"
            />
            <div className="propertyTitles">
              <h1>Dubai</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="propertyItem">
            <img
              src="https://i.ibb.co/hFM5W2W/689422.webp"
              alt=""
              className="propertyImg"
            />
            <div className="propertyTitles">
              <h1>Lisbone</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
