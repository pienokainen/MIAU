import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UpdateStoryItems } from './services'
import PageRenderer from './reactComponents/pages/index.js'
import globalStyles from './styles/globalStyles.css';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [storyData, setStoryData] = useState([]);
  const [storyPoints, setStoryPoints] = useState({"currentPoints":0, "maxPoints":0});
  const [newPageInformation, setNewPageInformation] = useState({"pageType":"landing"});

  let currentIndex = 0;

  useEffect(() => {
    setIsLoading(true)

    UpdateStoryItems("", setStoryData, setIsLoading);
  }, []);

  
  const handlePageChange = () => {

    const currentStoryData = storyData.storyData[currentIndex];

    if (currentStoryData.pageType === "header") {
      setStoryPoints({...storyPoints, "maxPoints":currentStoryData.maxPoints});
      currentIndex++;
    }

    if (currentStoryData.pageType === "report") {
      // Todo: logic to get to report page

    }

    setNewPageInformation(storyData.storyData[currentIndex]);
    currentIndex++;
  }

  return (
    <Router>
      <div className={globalStyles}>
        <Switch>
          <Route exact path="/">
            <PageRenderer handlePageChange={handlePageChange}
                          newPageInformation={newPageInformation}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
