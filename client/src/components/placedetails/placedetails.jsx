import React from "react";

const Placedetails = ({ place }) => {
  return (
    <>
      <h1>{place.name}</h1>
      <h2>{place.locationText}</h2>
      <h5>{place.description}</h5>
      <h4>{place.date}</h4>
    </>
  );
};

export default Placedetails;
