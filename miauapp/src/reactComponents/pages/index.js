import React from "react";
import QuestionnairePage from "./QuestionnairePage.js";
import StoryPage from "./StoryPage.js";
import Points from "../components/Points";

export default function PageRenderer(props) {
  const renderPage = () => {
    switch (props.page.pageType) {
      case "story":
        return (
          <StoryPage
            handlePageChange={props.handlePageChange}
            pageInformation={props.page}
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

  return (
    <div>
      <Points
        classPosition={"point-image"}
        classStyle={"points-style"}
        points={props.points}
      />
      {renderPage()}
    </div>
  );
}
