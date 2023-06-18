// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HabitPage from "./HabitPage";
import ArchivePage from "./ArchivePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HabitPage} />
        <Route path="/archive" component={ArchivePage} />
      </Switch>
    </Router>
  );
}

export default App;
