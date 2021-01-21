import React from "react";
import Button from "../components/Button.js";
import TextArea from "../components/TextArea.js";
import StoryImage from "../components/StoryImage.js";

export default function LandingPage(props) {
  const handlePageChange = (event) => {
    props.handlePageChange("storyPage");
  };

  return (
    <div id="rapper">
      <TextArea
        text={"jotain"}
        classPosition={"text-area"}
        classStyle={"lp-text-style"}
      />
      <Button
        buttonText={"A-LOI-TA"}
        classPosition={"start-button"}
        classStyle={"start-button-style"}
        onClick={handlePageChange}
      />
       <StoryImage
        image={"https://images.dailyhive.com/20200128075554/tacobell.jpeg"}
        classPosition={"story-image"}
        classStyle={"story-image-style"}
      />
    </div>
  );
}
