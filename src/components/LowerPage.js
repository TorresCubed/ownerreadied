import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(() => ({
  container:{
    flex: "1 1 auto",
    backgroundColor: "red",
    border: "1px solid black",
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
