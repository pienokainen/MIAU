import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StoryRoute from "./reactComponents/routes/StoryRoute";
import { UpdateStoryItems } from "./services";
import PageRenderer from "./reactComponents/pages/index.js";
import "./styles/globalStyles.css";
import LandingPage from "./reactComponents/pages/LandingPage";


function App() {
  return (
    <Router>
      <body className={"bgrStyle"} >
        <div className={"globalStyles"}>
        <Switch>
          <Route exact path="/:storyId">
            <StoryRoute />
          </Route>
        </Switch>
        </div>
      </body>
    </Router>
  );
}

export default App;
