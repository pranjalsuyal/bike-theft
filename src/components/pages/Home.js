import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeSection from "../HomeSection";
import SearchBar from "../SearchBar";
import Case from "../Case";
import { CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

function Home() {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(true);
  //api call here
  const onSearchSubmit = async (term, fromDate, toDate) => {
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
      // .then(setResults(res.data.incidents))
      .catch((err) => {
        setErrMsg(err.message);
        setLoading(false);
      });
    setResults(res.data.incidents);
    setLoading(false);
    // const noOfCases = res.data.incidents.length;
  };

  useEffect(() => {
    onSearchSubmit("");
  }, []);

  return (
    <>
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
        <Alert severity="warning">
          Oh-ho, No results Found, Please try different filters
        </Alert>
      )}
    </>
  );
}

export default Home;
