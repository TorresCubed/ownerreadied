import { makeStyles } from "@material-ui/core/styles"
import NavBar from "./NavBar";
import BoxImage from "./BoxImage";
import LowerPage from "./LowerPage"

const styles = makeStyles(() => ({
  container:{
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    color: "white",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  footer:{
    flex: 1
  },
  boxes: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    height: "calc(100vw/3)"
  },
  lowerPage: {
    flexGrow: 2
  }
}));

const HomePage = (props) => {
  const classes = styles();


  return (
    <div className={classes.container}>
      <NavBar/>
      <div className={classes.boxes}>
        <BoxImage/>
        <BoxImage/>
        <BoxImage/>
      </div>
      <LowerPage className={classes.lowerPage}/>
    </div>
  );

};

export default HomePage;
