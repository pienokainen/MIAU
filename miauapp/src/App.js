import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StoryRoute from "./reactComponents/routes/StoryRoute";
import "./styles/globalStyles.css";

function App() {
  return (
    <Router>
      <div className={"bgrStyle"}>
        <div className={"globalStyles"}>
          <Switch>
            <Route exact path="/">
              <StoryRoute />
            </Route>
            <Route exact path="/:storyId">
              <StoryRoute />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
