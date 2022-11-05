import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, Card} from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles.js';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';


const List = () => {
   const classes = useStyles();
   const [type, setType] = useState('restaurants');
   const [rating, setRating] = useState('restaurants');
   const places = [
    { name: "Luke's Party",
      location: 'Pizza Tree',
      description: 'This is a Description'},
    { name: 'Wedding',
      location: 'Columbia',
      description: 'This is a Description'},
    { name: 'Birthday',
      location: 'Columbia',
      description: 'This is a Description'},
    { name: 'Graduation',
      location: 'Columbia',
      description: 'This is a Description'},
];
    return (
        <div className={classes.container}>
            <Typography variant="h4">Caravans Near You</Typography>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                        <Grid item key={i} xs={12}>
                            <Card>
                            <PlaceDetails place={place} />
                            </Card>
                        </Grid>    
                ))}
            </Grid>
        </div>
   ); 
}

export default List;