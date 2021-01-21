import { React } from "react";
import TextArea from "../components/TextArea.js";
import StoryImage from "../components/StoryImage.js";
import Button from "../components/Button.js";

export default function StoryPage({ handlePageChange, pageInformation }) {
  const handlePageChangeEvent = (event) => {
    handlePageChange();
  };

  return (
      <div>
        {/* Story text area */}
        <TextArea
          text={pageInformation.text}
          classPosition={"text-area"}
          classStyle={"text-area-style"}
        />
        {/* Story image */}
        <StoryImage
          image={pageInformation.storyImage.imageLocation}
          classPosition={"story-image"}
          classStyle={"story-image-style"}
        />
        {/* Next page button */}
        <Button
          classPosition={"nextpage-button"}
          classStyle={"nextpage-button-style"}
          onClick={handlePageChangeEvent}
        />
    </div>
  );
}
