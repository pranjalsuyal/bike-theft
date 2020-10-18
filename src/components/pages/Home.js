import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeSection from "../HomeSection";
import SearchBar from "../SearchBar";
import Navbar from "../Navbar";
import Case from "../Case";
import { CircularProgress, makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Police from "../../utils/police.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Police})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundAttachment: "fixed",
  },
}));

function Home() {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const onSearchSubmit = async (term, fromDate, toDate) => {
    setLoading(true);
    console.log(term, "here");
    const res = await axios
      .get("https://bikewise.org:443/api/v2/incidents", {
        params: {
          proximity: "Berlin",
          proximity_square: 100,
          query: term,
          per_page: 100,
          occurred_after: fromDate,
          occurred_before: toDate,
        },
      })
      .catch((err) => {
        setErrMsg(err.message);
        setLoading(false);
      });
    setResults(res.data.incidents);
    setLoading(false);
  };

  useEffect(() => {
    onSearchSubmit("");
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <Navbar />
        <HomeSection />
        <SearchBar onSearchSubmit={onSearchSubmit} />
        {errMsg && <Alert severity="error">{errMsg}</Alert>}
        {loading && (
          <CircularProgress
            size={200}
            thickness={2}
            style={{ marginLeft: "42%" }}
          />
        )}
        {results.length > 0 ? (
          <Case results={results} />
        ) : (
          !loading && (
            <Alert severity="warning">
              Oh-ho, No results Found, Please try different filters
            </Alert>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
