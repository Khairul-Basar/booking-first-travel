import React from "react";
import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

function PropertyList() {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countbytype"
  );

  const images = [
    "https://i.ibb.co/z2r923K/477697253.jpg",
    "https://i.ibb.co/cLgg8SL/6e8294d75f648eab2cd2818f0a40854367e584a5.jpg",
    "https://i.ibb.co/6WW87CS/477697253.jpg",
    "https://i.ibb.co/ySxD85L/506591607.jpg",
    "https://i.ibb.co/rFqQkpz/240848933.jpg",
  ];
  return (
    <div className="pListContainer">
      {loading ? (
        "Property Type Loading..."
      ) : (
        <>
          {data &&
            images.map((image, i) => (
              <div className="pListItem" key={i}>
                <img src={image} alt="" className="pListImg" />
                <div className="pListTitle">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default PropertyList;
