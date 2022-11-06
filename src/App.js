import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState(null);
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          setCoords({ lat: latitude, lng: longitude });
          console.log(latitude);
          console.log(longitude);
        });
      }, []);
    
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                       isLoading={isLoading}
                    />
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
        </>
    );
}

export default App;