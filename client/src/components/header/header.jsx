import React from 'react'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles.js'

const Header = () => {
	const classes = useStyles()

	return (
		<AppBar position='relative'>
			<Toolbar className={classes.toolbar}>
				<Typography variant='h5' className={classes.title}>
					Caravan
				</Typography>
				<Box display='flex'>
					<Typography variant='h6' className={classes.title}>
						A More Social Maps Experience
					</Typography>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header
