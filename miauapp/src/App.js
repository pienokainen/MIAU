import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UpdateStoryItems } from './services'
import PageRenderer from './reactComponents/pages/index.js'
import globalStyles from './styles/globalStyles.css';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [storyData, setStoryData] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [newPageInformation, setNewPageInformation] = useState("landingPage");

  useEffect(() => {
    setIsLoading(true)

    UpdateStoryItems("", setStoryData, setIsLoading);
    console.log(isLoading, storyData);
  }, []);

  
  const handlePageChange = (newPage) => {

    setNewPageInformation(newPage);

  }

  return (
    <Router>
      <div className={globalStyles}>
        <Switch>
          <Route exact path="/">
            <PageRenderer textValue={textValue}
                          handlePageChange={handlePageChange}
                          newPageInformation={newPageInformation} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
