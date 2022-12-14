import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  cardheading: {
    display: "flex",
    position: "relative",
  },
  eventheading: {
    float: "left",
  },
  addbutton: {
    position: "absolute",
    right: 0,
    borderRadius: 40,
    backgroundColor: "white",
    color: "#85caff",
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
    backgroundColor: "#85caff",
    color: "#2d597b",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "75vh",
    overflow: "auto",
    marginTop: "10px",
    color: "white",
  },
  card: {
    backgroundColor: "#2d597b",
    color: "white",
    cursor: "pointer",
  },
  activeCard: {
    outline: "3px solid rgba(255, 255, 255, 0.4)",
    transition: "0.15s all",
    background: "rgba(39, 141, 219, 1)",
  },
}));
