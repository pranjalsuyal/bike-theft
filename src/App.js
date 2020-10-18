import React from "react";
import Home from "./components/pages/Home";
import DetailedPage from "./components/pages/DetailedPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/case/:id" component={DetailedPage} />
      </Switch>
    </Router>
  );
}

export default App;
