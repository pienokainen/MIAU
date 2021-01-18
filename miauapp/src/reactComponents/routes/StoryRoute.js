import React from "react";
import Story from "../Story";
import { useParams } from "react-router-dom";

function StoryRoute() {
  const params = useParams();

  return <Story storyId={params.storyId} />;
}

export default StoryRoute;
