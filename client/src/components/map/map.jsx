import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { useRecoilState } from 'recoil';
import mapStyles from '../../mapStyles.js'
import useStyles from './styles.js';
import { locationAtom } from '../../atoms/atoms.js';
import { caravanAtom } from '../../atoms/atoms.js';
import './marker.css';
const Map = ({ coords, places, setCoords, setBounds}) => {
   const classes = useStyles();
   const isMobile = useMediaQuery('(min-width:600px)');
   
   /* const coordinates = { lat: 50, lng: -94 }; */
   const [marker, setMarker] = useRecoilState(locationAtom);
   const [caravans, setCaravans] = useRecoilState(caravanAtom);

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
            {/* <Marker  */}
            <div id="userLocation" className='pin bounce'
                lat={coords.lat}
                lng={coords.lng}
            />
            <div id="rose" className='pin bounce'
                lat={38.954731}
                lng={-92.325653}
            />
            <div id="panera" className='pin bounce'
                lat={38.948020}
                lng={-92.295310}
            />
            <div id="shelter" className='pin bounce'
                lat={38.955300}
                lng={-92.367010}
            />
            <div id="valhalla" className='pin bounce'
                lat={38.966170}
                lng={-92.377380}
            />
            </GoogleMapReact>
        </div>
   ); 
}

export default Map;