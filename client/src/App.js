import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import GlobalStyle from "./globalstyles";
import Header from "./components/header/header";
import List from "./components/list/list";
import Map from "./components/map/map";
import { caravanAtom } from "./atoms/atoms";

const App = () => {
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  const [caravans, setCaravans] = useRecoilState(caravanAtom);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
        console.log(latitude);
        console.log(longitude);
      }
    );
  }, []);
  useEffect(() => {
    const fetchCaravans = async () => {
      const url = "http://localhost:5000/twee";
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log({ data, body: data.body });
        // setCaravans(data.data)
        console.log({ caravans });
        // Set recoil
      } catch (error) {
        console.error(error);
      }
    };

    fetchCaravans();
  }, []);

  return (
    <RecoilRoot>
      <GlobalStyle />
      <CssBaseline />
      <Header />
      <Grid
        container
        spacing={3}
        style={{ width: "100%", backgroundColor: "#2d597b" }}
      >
        <Grid item xs={12} md={4}>
          <List isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={places}
          />
        </Grid>
      </Grid>
    </RecoilRoot>
  );
};

export default App;
