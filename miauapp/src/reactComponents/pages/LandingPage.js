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
        text={"Hei, ter-ve-tu-loa Ko-a-lan Lii-ken-ne-tes-tiin. A-loi-ta tes-ti pai-na-mal-la nap-pu-laa!"}
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
