import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles.js';
const Map = () => {
   const classes = useStyles();
   const isMobile = useMediaQuery('(min-width:600px)');
   
   const coordinates = { lat: 38.95, lng: -92.33 };
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBVVXhb0fRaaV6KhmNMX65aKXsr2tZoADY'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={12}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
   ); 
}

export default Map;