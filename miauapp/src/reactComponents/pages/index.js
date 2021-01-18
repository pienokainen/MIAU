import { render } from "@testing-library/react";
import React from "react";
import Button from "../components/Button.js";
import LandingPage from "./LandingPage.js";
import QuestionnairePage from "./QuestionnairePage.js";
import ReportPage from "./ReportPage.js";
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
    }
  };

  return <div>{renderPage()}</div>;
}
