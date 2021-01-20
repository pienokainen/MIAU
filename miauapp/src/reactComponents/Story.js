import React, { useState, useEffect } from "react";
import { UpdateStoryItems } from "../services";
import PageRenderer from "./pages/index.js";
import LandingPage from "./pages/LandingPage";
import ReportPage from "./pages/ReportPage";

function Story({ storyId }) {
  const [isLoading, setIsLoading] = useState(true);

  const [story, setStory] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const [visibleSection, setVisibleSection] = useState("landing");
  // const [newPageInformation, setNewPageInformation] = useState({"pageType":"landing"});

  useEffect(() => {
    UpdateStoryItems(storyId).then((story) => {
      setStory(story);
      setIsLoading(false);
    });
  }, []);

  const handlePageChange = () => {
    if (visibleSection === "landing") {
      setVisibleSection("content");
      return;
    }

    if (visibleSection === "content") {
      if (pageNumber + 1 >= story.pages.length) {
        setVisibleSection("report");
        return;
      }
      setPageNumber(pageNumber + 1);
    }
  };

  if (visibleSection === "landing") {
    return <LandingPage handlePageChange={handlePageChange}/>;
  } else if (visibleSection === "content") {
    const page = story.pages[pageNumber];
    return <PageRenderer page={page} handlePageChange={handlePageChange} />;
  } else if (visibleSection === "report") {
    return <ReportPage />;
  }

  return null;
}

export default Story;
