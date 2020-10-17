import React, { useEffect } from "react";
import axios from "axios";
import HomeSection from "../HomeSection";
import SearchBar from "../SearchBar";

function Home() {
  //api call here
  const onSearchSubmit = async (term) => {
    console.log(term, "here");
    const res = await axios.get("https://bikewise.org:443/api/v2/incidents", {
      params: {
        proximity: "Berlin",
        proximity_square: 100,
        query: term,
        per_page: 100,
      },
    });
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
    </>
  );
}

export default Home;

/*

onSearchSubmit = async (term) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term, per_page: 20 },
      headers: {
        Authorization: "Client-ID RxOfRHYrs4q27UpD2Fpa8HP-DmhQLqE8tdYIbcMsZLk",
      },
    });
    searchTerm = res.config.params.query;
    console.log(res, "response");
    this.props.imageArray(res.data.results);
  };

*/
