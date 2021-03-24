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
        text={
          "HEI, TER-VE-TU-LOA KO-A-LAN LII-KEN-NE-TES-TIIN. A-LOI-TA TES-TI PAI-NA-MAL-LA NAP-PU-LAA!"
        }
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
        image={"./databaseMock/images/logo.jpeg"}
        classPosition={"story-image"}
        classStyle={"lp-image-style"}
      />
    </div>
  );
}
