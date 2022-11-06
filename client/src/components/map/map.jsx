import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { useRecoilState } from "recoil";
import mapStyles from "../../mapStyles.js";
import useStyles from "./styles.js";
import { locationAtom, selectedCaravanAtom } from "../../atoms/atoms.js";
import { caravanAtom } from "../../atoms/atoms.js";
import "./marker.css";
import useCaravansQuery from "../../queries/useCaravansQuery.js";

const testCaravan = {
  _id: "abc",
  location: {
    lat: 38.614403547072754,
    lng: -90.27484208350617,
  },
  name: "St. Louis!!!",
  description: "",
};

const Map = ({ coords, places, setCoords, setBounds }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  /* const coordinates = { lat: 50, lng: -94 }; */
  const [marker, setMarker] = useRecoilState(locationAtom);
  //   const [caravans, setCaravans] = useRecoilState(caravanAtom);

  const { data: caravans, isLoading, error } = useCaravansQuery();
  const [selectedCaravan, setSelectedCaravan] =
    useRecoilState(selectedCaravanAtom);
  console.log({ caravans });

  const handleMapChildClick = (id, data) => {
    console.log("map child click", { id, data });
    // Set a selected id
    setSelectedCaravan(id);
  };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBVVXhb0fRaaV6KhmNMX65aKXsr2tZoADY" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={""}
        onChildClick={handleMapChildClick}
      >
        {/* Caravan Markers */}
        {!isLoading &&
          !error &&
          caravans?.length > 0 &&
          caravans.map((caravan) => (
            <div
              key={caravan._id}
              id={caravan._id}
              className="pin bounce"
              // lat={caravan.location.lat}
              // lng={caravan.location.lng}
              text={caravan.name}
              description={caravan.description || ""}
            />
          ))}

        <div
          key={testCaravan._id}
          id={testCaravan._id}
          className="pin bounce"
          lat={testCaravan.location.lat}
          lng={testCaravan.location.lng}
          text={testCaravan.name}
          description={testCaravan.description || ""}
        />

        {/* <Marker  */}
        <div
          id="userLocation"
          className="pin bounce"
          lat={coords.lat}
          lng={coords.lng}
        />
        <div
          id="rose"
          className="pin bounce"
          lat={38.954731}
          lng={-92.325653}
        />
        <div
          id="panera"
          className="pin bounce"
          lat={38.94802}
          lng={-92.29531}
        />
        <div
          id="shelter"
          className="pin bounce"
          lat={38.9553}
          lng={-92.36701}
        />
        <div
          id="valhalla"
          className="pin bounce"
          lat={38.96617}
          lng={-92.37738}
        />
      </GoogleMapReact>
    </div>
  );
};

//   return (
//     <div className={classes.mapContainer}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyBVVXhb0fRaaV6KhmNMX65aKXsr2tZoADY" }}
//         defaultCenter={coords}
//         center={coords}
//         defaultZoom={12}
//         margin={[50, 50, 50, 50]}
//         options={{
//           disableDefaultUI: true,
//           zoomControl: true,
//           styles: mapStyles,
//         }}
//         onChange={""}
//         onChildClick={""}
//       >
//         {/* <Marker  */}
//         <div className="pin bounce" lat={coords.lat} lng={coords.lng} />
//       </GoogleMapReact>
//     </div>
//   );

export default Map;
