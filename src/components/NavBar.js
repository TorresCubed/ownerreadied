import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react";

const styles = makeStyles(() => ({
  background: {
    backgroundColor: "white",
    minHeight: "45px",
    border: "1px solid black",
    display: "flex",
  }, 
  searchContainer: {
    position: "relative",
  },
  campaignButtonContainer: {
    color: "white",
    cursor: "pointer",
    width: "70px",
    textAlign: "center"
  },
  homePageButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    textAlign: "center"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3px",
    paddingRight: "10px",
    paddingLeft: "10px",
    backgroundColor: "grey",
    border: "1px solid black"
  },
  searchBar: {
    border: "1px solid transparent",
    outline: "none",
    fontSize: 16,
  },
  searchItems: {
    // backgroundColor: "#d4d4d4",
    // color: "black",
    // fontSize: 16,
    // position: "absolute",
    // border: "1px solid black",
    // zIndex: 99999,
    // top: "100%",
    // left: -1,
    // right: -1,
  },
  campaignSelector:{
    width: "100%",
    height: "100%",
    color: "black",
    fontSize: "calc(8px + 2vmin)",
    backgroundColor: "white",
    border: "none",
    outline: "none",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  campaignNames: {
    color: "black",
    fontSize: 16,
    position: "absolute",
    border: "1px solid black",
    zIndex: 99999,
    top: "98%",
    left: -2,
    right: -2,
  },
  navTitle: {
    fontFamily: "Dancing Script, cursive",
    position: "relative",
    paddingLeft: "10px",
    top: "8px",
    display: "flex",
    fontSize: "calc(13px + 2vmin)",
    color: "black",
    flexGrow: 1
  },
  
}));

const NavBar = (props) => {
  const classes = styles();
  const [searching, setSearching] = useState(false);
  const [selectingCampaign, setSelectingCampaign] = useState(false);
  const [pageSearch, setPageSearch] = useState("");
  const [campaignSearch, setCampaignSearch] = useState("");

  const clearSearch = (event) => {
    event.preventDefault();
    setTimeout(setSearching, 100, false);
    setTimeout(setPageSearch, 100, "");
  }

  const clearCampaignSearch = (event) => {
    event.preventDefault();
    setTimeout(setSelectingCampaign, 100, false);
    setTimeout(setCampaignSearch, 100, "");
  }
  
  const handlePageText = (event) => {
    if(event.target.value === "") {
      setPageSearch("");
      setSearching(false);
      return;
    }
    setSearching(true);
    setPageSearch(event.target.value)
  }

  const handleCampaignText = (event) => {
    if(event.target.value === "") {
      setCampaignSearch("");
      setSelectingCampaign(false);
      return;
    }
    setSelectingCampaign(true);
    setCampaignSearch(event.target.value)
  }

  const showCampaignSearch = () => {
    setSelectingCampaign(!selectingCampaign);
  }

  const setHome = (event) => {
  }

  const selectCampaign = (event) => {
    setSelectingCampaign(!selectingCampaign);
  }

  const selectPage = (event) => {
    setSearching(false);
    setPageSearch("");
  }

  const handleCampaignSubmit = (event) => {
    event.preventDefault();
  }

  const handlePageSubmit = async (event) => {
    event.preventDefault()
    setPageSearch("");
    setSearching(false);
  }

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div 
        className={classes.homePageButton} 
        onClick={setHome}>
          <div>
            Home
          </div>
        </div>
      </div>
      <div className={classes.navTitle}>
        Ashley Torres Dog Training!
      </div>
      <div className={classes.container}>
        <div className={classes.searchContainer}>
          <form onSubmit={handlePageSubmit}>
          <input 
            value={pageSearch}
            placeholder="Page Search" 
            className={classes.searchBar} 
            onBlur={clearSearch}
            onChange={handlePageText} 
            type="text"/>
            {searching && 
              <div className={classes.searchItems}>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
};


export default NavBar;
