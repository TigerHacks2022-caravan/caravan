import React, { useState } from 'react'
import {
	CircularProgress,
	Grid,
	Typography,
	Card,
	Button,
	CardContent
} from '@material-ui/core'

import PlaceDetails from '../placedetails/placedetails'

import useStyles from './styles.js'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'

const List = () => {
	const classes = useStyles()

	const places = [
		{
			name: "Battle of the Bands",
			location: 'Rose Music Hall',
			description: 'Join us at Rose Music Hall for a battle of the bands!',
			date: '11-11-22 8:00pm'
		},
		{
			name: 'Weekly Study Group',
			location: 'Panera Bread',
			description: 'We meet every Thursday to talk CS/IT and collaborate with one another, come by and meet some new folks!',
			date: 'Thursdays @ 6pm'
		},
		{
			name: 'Yoga & Meditation',
			location: 'Shelter Gardens',
			description: 'Join us every Saturday morning for 30 minutes of yoga and meditation',
			date: 'Saturdays @ 8am'
		},
		{
			name: 'Magic: The Gathering Tournament',
			location: "Valhalla's Gate Games",
			description: 'Beginners or advanced players, all are welcome! Come compete and meet fellow players!',
			date: '11-19-22'
		}
	]
	return (
		<div className={classes.container}>
			<div className={classes.cardheading}>
			<Typography className={classes.eventsheading} variant='h4'>Events Near You</Typography>
			<Button className={classes.addbutton} variant="contained" >+</Button>
			</div>
			<Grid container spacing={3} className={classes.list}>
				{places?.map((place, i) => (
					<Grid item key={i} xs={12}>
						<Card className={classes.card}>
							<CardContent>
								<PlaceDetails place={place} />
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default List
