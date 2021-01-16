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
                return <LandingPage/>;
            case ("storyPage"):
                return <StoryPage/>;
            case ("questionnairePage"):
                return <QuestionnairePage/>;
            case ("reportPage"):
                return <ReportPage/>;
            default:
                // Todo; Error
                <alert></alert>
        }
    }

    return (<div>
                {renderPage()}
            </div>);
}