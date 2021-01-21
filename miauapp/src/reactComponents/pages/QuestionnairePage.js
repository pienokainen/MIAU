import { React, useState } from "react";
import Button from "../components/Button.js";
import Points from "../components/Points.js";
import TextArea from "../components/TextArea.js";
import "./styles.css";

export default function QuestionnairePage({
  handlePageChange,
  pageInformation,
  points,
  setPoints,
}) {
  const [isDisabledButton, setIsDisabledButton] = useState({
    buttons: {
      0: false,
      1: false,
      2: false,
    },
  });

  const handleClick = (buttonIndex) => {
    if (buttonIndex === -1) {
      handlePageChange();
    }

    if (buttonIndex === pageInformation.correct) {
      // TODO: logic to handle positive feedback.
      setPoints(points + 1);
      handlePageChange();
      return;
    }

    let newState = isDisabledButton;
    newState[buttonIndex] = true;
    setIsDisabledButton({
      ...isDisabledButton,
      buttons: {
        [buttonIndex]: true,
      },
    });
  };

  return (
    <div>
      <Points
        classPosition={"position-top-right"}
        classStyle={"points-style"}
        points={points}
      />
      <div id="wrapper">
        <TextArea
          text={pageInformation.text}
          classPosition={"questionnaire-text-area"}
          classStyle={"questionnaire-text-area-style"}
        />
        <div className="button-group">
          <Button
            isDisabled={isDisabledButton.buttons[0]}
            bgrUrl={pageInformation.questionImages[0].alternative1}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleClick(0, this);
            }}
          />
          <Button
            isDisabled={isDisabledButton.buttons[1]}
            bgrUrl={pageInformation.questionImages[0].alternative2}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleClick(1, this);
            }}
          />
          <Button
            isDisabled={isDisabledButton.buttons[2]}
            bgrUrl={pageInformation.questionImages[0].alternative3}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleClick(2, this);
            }}
          />
        </div>
      </div>
      <TextArea
        text={pageInformation.text}
        classPosition={"questionnaire-text-area"}
        classStyle={"questionnaire-text-area-style"}
      />
      <Button
        classPosition={"nextpage-button"}
        classStyle={"nextpage-button-style"}
        onClick={() => {
          handleClick(-1);
        }}
      />
    </div>
  );
}
