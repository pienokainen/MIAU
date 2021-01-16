import { render } from '@testing-library/react';
import React from 'react';
import Button from '../components/Button.js';
import LandingPage from './LandingPage.js';
import QuestionnairePage from './QuestionnairePage.js';
import ReportPage from './ReportPage.js';
import StoryPage from './StoryPage.js';


export default function PageRenderer(props) {

    const renderPage = () => {
        switch (props.newPageInformation) {
            case ("landingPage"):
                return <LandingPage handlePageChange={props.handlePageChange}/>;
            case ("storyPage"):
                return <StoryPage props={props}/>;
            case ("questionnairePage"):
                return <QuestionnairePage props={props}/>;
            case ("reportPage"):
                return <ReportPage props={props}/>;
            default:
                // Todo; Error
                <alert></alert>
        }
    }

    return (<div>
                {renderPage()}
            </div>);
}