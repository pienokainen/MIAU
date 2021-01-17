import { render } from '@testing-library/react';
import React from 'react';
import Button from '../components/Button.js';
import LandingPage from './LandingPage.js';
import QuestionnairePage from './QuestionnairePage.js';
import ReportPage from './ReportPage.js';
import StoryPage from './StoryPage.js';


export default function PageRenderer(props) {

    const renderPage = () => {
        switch (props.newPageInformation.pageType) {
            case ("landing"):
                return <LandingPage handlePageChange={props.handlePageChange}
                                    pageInformation={props.newPageInformation}/>;
            case ("story"):
                return <StoryPage handlePageChange={props.handlePageChange}
                                  pageInformation={props.newPageInformation}/>;
            case ("questionnaire"):
                return <QuestionnairePage handlePageChange={props.handlePageChange}
                                          pageInformation={props.newPageInformation}/>;
            case ("report"):
                return <ReportPage handlePageChange={props.handlePageChange}/>;
            default:
                <alert></alert>
        }
    }

    return (<div>
                {renderPage()}
            </div>);
}