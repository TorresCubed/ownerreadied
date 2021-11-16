import './App.css';
import HomePage from './components/HomePage';
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  app:{
    display: "flex",
    flexFlow: "column",
  },
}));


function App() {
  const classes = styles();

  return (
    <div className={classes.app}>
      <HomePage/>
    </div>
  );
}

export default App;
