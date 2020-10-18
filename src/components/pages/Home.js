import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeSection from "../HomeSection";
import SearchBar from "../SearchBar";
import Case from "../Case";

function Home() {
  const [results, setResults] = useState([]);
  //api call here
  const onSearchSubmit = async (term, fromDate, toDate) => {
    console.log(term, "here");
    const res = await axios.get("https://bikewise.org:443/api/v2/incidents", {
      params: {
        proximity: "Berlin",
        proximity_square: 100,
        query: term,
        per_page: 100,
        occurred_after: fromDate,
        // occurred_before: toDate ? toDate : 0,
      },
    });
    setResults(res.data.incidents);
    console.log(res, "result");
    console.log(res.data.incidents.length);
  };

  useEffect(() => {
    onSearchSubmit("");
  }, []);

  return (
    <>
      <HomeSection />
      <SearchBar onSearchSubmit={onSearchSubmit} />
      {results && <Case results={results} />}
    </>
  );
}

export default Home;
