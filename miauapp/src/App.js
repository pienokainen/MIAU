import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StoryRoute from "./reactComponents/routes/StoryRoute";
import { UpdateStoryItems } from "./services";
import PageRenderer from "./reactComponents/pages/index.js";
import globalStyles from "./styles/globalStyles.css";
import LandingPage from "./reactComponents/pages/LandingPage";

function App() {
  return (
    <Router>
      <div className={globalStyles}>
        <Switch>
          <Route exact path="/:storyId">
            <StoryRoute />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
