import React from "react";
import QuestionnairePage from "./QuestionnairePage.js";
import StoryPage from "./StoryPage.js";

export default function PageRenderer({ page, handlePageChange }) {
  const renderPage = () => {
    switch (page.pageType) {
      case "story":
        return (
          <StoryPage
            handlePageChange={handlePageChange}
            pageInformation={page}
          />
        );
      case "questionnaire":
        return (
          <QuestionnairePage
            handlePageChange={handlePageChange}
            pageInformation={page}
          />
        );
      default:
        return;
    }
  };

  return <div>{renderPage()}</div>;
}
