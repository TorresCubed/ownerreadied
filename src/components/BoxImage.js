import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(() => ({
  container:{
    flex: "1 1 auto",
    backgroundColor: "blue",
    border: "1px solid black",
    "&:hover": {
      "-webkit-filter": "brightness(70%)",
    }
  },
}));

const HomePage = (props) => {
  const classes = styles();

  const handleClick = (e) => {
    e.preventDefault();
    alert("You Clicked Me!")
  }

  return (
    <div onClick={handleClick} className={classes.container}>
    </div>
  );

};

export default HomePage;
