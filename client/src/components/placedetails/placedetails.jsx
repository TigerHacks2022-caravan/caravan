import React from 'react';

const Placedetails = ({ place }) => {
   return (
    <>
        <h1>{place.name}</h1>
        <h2>{place.location}</h2>
        <h4>{place.description}</h4>
    </>
   ); 
}

export default Placedetails;