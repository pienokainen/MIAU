import React, {useState} from  'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GetView} from './services'
import LandingPage from './reactComponents/pages/index.js'
import QuestionnairePage from './reactComponents/pages/QuestionnairePage.js';
import ReportPage from './reactComponents/pages/ReportPage.js';
import StoryPage from './reactComponents/pages/StoryPage.js';
import globalStyles from './styles/globalStyles.css';

function App() {

  const [textValue, setTextValue] = useState("");
  const [currentPage, setCurrentPage] = useState("/");
  const [newPageInformation, setNewPageInformation] = useState({});

  const handlePageChange = (sender) => {
    let parameter = sender.storyId;
    let variable = GetView(parameter);

    setNewPageInformation(variable);
    setCurrentPage(newPageInformation.pageName)
  }
  
  return (
    <Router>
      <div className={globalStyles}>
        <Switch>
          <Route exact path={currentPage}>
            <QuestionnairePage /* LandingPage */ textValue={textValue} handlePageChange={handlePageChange} pageProperties={newPageInformation}/>
          </Route>
          <Route exact path={currentPage}>
            <StoryPage textValue={textValue} handlePageChange={handlePageChange} pageProperties={newPageInformation}/>
          </Route>
          <Route exact path={currentPage}>
            <QuestionnairePage textValue={textValue} handlePageChange={handlePageChange} pageProperties={newPageInformation}/>
          </Route>
          <Route exact path={currentPage}>
            <ReportPage textValue={textValue} handlePageChange={handlePageChange} pageProperties={newPageInformation}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
