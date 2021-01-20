import React from "react";
import Button from "../components/Button.js";


export default function LandingPage(props) {
  const handlePageChange = (event) => {
    props.handlePageChange("storyPage");
  };

  return (
    <div>
      <Button
        buttonText={"A-LOI-TA"}
        classPosition={"start-button"}
        classStyle={"start-button-style"}
        onClick={handlePageChange}
      />
    </div>
  );
}
