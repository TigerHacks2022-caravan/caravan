import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  Card,
  Button,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@material-ui/core";
import classNames from "classnames";
import AddIcon from "@material-ui/icons/Add";
import PlaceDetails from "../placedetails/placedetails";

import useStyles from "./styles.js";
import useCaravansQuery from "../../queries/useCaravansQuery";
import { caravanAtom, selectedCaravanAtom } from "../../atoms/atoms";
import { useRecoilState } from "recoil";
import useCreateCaravanMutation from "../../mutation/useCreateCaravanMutation";

export const placesData = [
  {
    name: "Battle of the Bands",
    locationText: "Rose Music Hall",
    description: "Join us at Rose Music Hall for a battle of the bands!",
    date: "11-11-22 8:00pm",
  },
  {
    name: "Weekly Study Group",
    locationText: "Panera Bread",
    description:
      "We meet every Thursday to talk CS/IT and collaborate with one another, come by and meet some new folks!",
    date: "Thursdays @ 6pm",
  },
  {
    name: "Yoga & Meditation",
    locationText: "Shelter Gardens",
    description:
      "Join us every Saturday morning for 30 minutes of yoga and meditation",
    date: "Saturdays @ 8am",
  },
  {
    name: "Magic: The Gathering Tournament",
    locationText: "Valhalla's Gate Games",
    description:
      "Beginners or advanced players, all are welcome! Come compete and meet fellow players!",
    date: "11-19-22",
  },
];

const initialForm = {
  name: "",
  description: "",
  dateText: "today!",
  location: {
    lat: 38.6144,
    lng: -90.2748,
  },
  locationText: "Columbia, MO",
};

const List = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const handleClose = () => setOpen(false);

  const { data: caravans, isLoading, error } = useCaravansQuery();
  const { mutate, isLoading: isLoadingMutation } = useCreateCaravanMutation();
  const [selectedCaravan, setSelectedCaravan] =
    useRecoilState(selectedCaravanAtom);

  const handleCardClick = (caravan) => {
    if (selectedCaravan === caravan._id) {
      // remove it
      setSelectedCaravan("");
    } else {
      setSelectedCaravan(caravan._id);
    }
  };

  const onAddClick = () => {
    // toggle modal / drawer
    setOpen(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    // submit data
    mutate(formData);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Your Caravan</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create your caravan so that others can join!
          </DialogContentText>
          <div style={{ paddingTop: 20, paddingBottom: 20 }}>
            <TextField
              autoFocus
              id="name"
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              style={{ marginBottom: 20 }}
              // variant="standard"
            />
            <TextField
              autoFocus
              id="description"
              label="Description"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              style={{ marginBottom: 20 }}
              // variant="standard"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
      <div className={classes.container}>
        <div className={classes.cardheading}>
          <Typography className={classes.eventsheading} variant="h4">
            Events Near You
          </Typography>
          <Button
            className={classes.addbutton}
            variant="contained"
            onClick={onAddClick}
          >
            <AddIcon />
          </Button>
        </div>
        <Grid container spacing={3} className={classes.list}>
          {isLoading && (
            <CircularProgress
              style={{ marginBottom: 20, marginTop: 20, textAlign: "center" }}
            />
          )}

          {caravans?.length > 0 &&
            caravans.map((caravan, i) => (
              <Grid item key={caravan._id || i} xs={12}>
                <Card
                  // className={classes.card}
                  className={classNames(
                    classes.card,
                    caravan._id === selectedCaravan && classes.activeCard
                  )}
                  onClick={() => handleCardClick(caravan)}
                >
                  <CardContent>
                    {/* <PlaceDetails place={caravan} /> */}
                    <div>
                      <h1>{caravan.name}</h1>
                      <h2>{caravan.locationText}</h2>
                      <h5>{caravan.description}</h5>
                      <h4>{caravan.date}</h4>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default List;
