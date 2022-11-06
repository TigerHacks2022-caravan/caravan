import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
    backgroundColor: "navy",
  },
  mapContainer: {
    height: "85vh",
    width: "100%",
    marginTop: "20px",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
  },
  activeCard: {
    outline: "3px solid rgba(255, 255, 255, 0.4)",
    transition: "0.15s all",
    background: "rgba(39, 141, 219, 1)",
  },
}));
