import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
// import Album from "./components/Album";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Album /> */}

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
