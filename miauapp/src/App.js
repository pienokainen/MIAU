import React, {useState} from  'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GetView} from './services'
import PageRenderer from './reactComponents/pages/index.js'
import globalStyles from './styles/globalStyles.css';

function App() {

  const [textValue, setTextValue] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [newPageInformation, setNewPageInformation] = useState("landingPage");

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
          <Route exact path="/">
            <PageRenderer textValue={textValue} handlePageChange={handlePageChange} newPageInformation={newPageInformation}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
