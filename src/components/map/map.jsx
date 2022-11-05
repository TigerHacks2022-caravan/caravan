import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import mapStyles from '../../mapStyles.js'
import useStyles from './styles.js';
const Map = ({ coords, places, setCoords, setBounds}) => {
   const classes = useStyles();
   const isMobile = useMediaQuery('(min-width:600px)');
   
   const coordinates = { lat: 38.95, lng: -92.33 };
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBVVXhb0fRaaV6KhmNMX65aKXsr2tZoADY'}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={12}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
   ); 
}

export default Map;