import React from "react";
import Navbar from "./components/Navbar";
// import Album from "./components/Album";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Album /> */}

      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
