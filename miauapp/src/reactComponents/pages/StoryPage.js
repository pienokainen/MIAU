import { React } from "react";
import TextArea from "../components/TextArea.js";
import StoryImage from "../components/StoryImage.js";
import Button from "../components/Button.js";

export default function StoryPage({ handlePageChange, pageInformation }) {
  const handlePageChange = (event) => {
    props.handlePageChange();
  };

  return (
    <div>
      {/* Story text area */}
      <TextArea
        text={pageInformation.text}
        classPosition={""}
        classStyle={""}
      />
      {/* Story image */}
      <StoryImage
        image={pageInformation.storyImage.imageLocation}
        classPosition={""}
        classStyle={""}
      />
      {/* Next page button */}
      <Button
        classPosition={"nextpage-button"}
        classStyle={"nextpage-button-style"}
        onClick={handlePageChange}
      />
    </div>
  );
}
