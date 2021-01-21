import React from "react";
import QuestionnairePage from "./QuestionnairePage.js";
import StoryPage from "./StoryPage.js";

export default function PageRenderer(props) {
  const renderPage = () => {
    switch (props.page.pageType) {
      case "story":
        return (
          <StoryPage
            handlePageChange={props.handlePageChange}
            pageInformation={props.page}
            points={props.points}
          />
        );
      case "questionnaire":
        return (
          <QuestionnairePage
            handlePageChange={props.handlePageChange}
            pageInformation={props.page}
            points={props.points}
            setPoints={props.setPoints}
          />
        );
      default:
        return;
    }
  };

  return <div>{renderPage()}</div>;
}
