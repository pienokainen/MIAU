import { getDefaultNormalizer, waitFor } from "@testing-library/react";
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

  const [showFeedback, setShowFeedback] = useState(false);
  const [showNextPageButton, setShowNextPageButton] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("NONE");

  const getFeedbackText = (alternativeIndex) => {
    switch (alternativeIndex) {
      case 0:
        return pageInformation.feedback.alternative1;
      case 1:
        return pageInformation.feedback.alternative1;
      case 2:
        return pageInformation.feedback.alternative1;
      case 3:
        return "Hy-vä, tie-na-sit yh-den ko-li-kon!";
      case 4:
        return "Voi ei, nyt me-ni pie-leen, y-ri-tä uu-del-leen";
      default:
        return;
    }
  };

  const answerSuccess = () => {
    setTimeout(function () {
      setShowNextPageButton(true);
    }, 4000);
  };

  const updateFeedback = (buttonIndex) => {
    setFeedbackMessage(getFeedbackText(buttonIndex));
    setShowFeedback(true);
  };

  const handleAnswerClick = (buttonIndex) => {
    if (buttonIndex === pageInformation.correct) {
      updateFeedback(3);
      setPoints(points + 1);
      answerSuccess();
      return;
    }

    updateFeedback(4);
    let newState = isDisabledButton;
    newState[buttonIndex] = true;
    setIsDisabledButton({
      ...isDisabledButton,
      buttons: {
        [buttonIndex]: true,
      },
    });
  };

  const handleNewPage = () => {
    handlePageChange();
  };

  return (
    <div>
      <Points
        classPosition={"point-image"}
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
            bgrUrl={pageInformation.questionImages.alternative1}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleAnswerClick(0, this);
            }}
          />
          <Button
            isDisabled={isDisabledButton.buttons[1]}
            bgrUrl={pageInformation.questionImages.alternative2}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleAnswerClick(1, this);
            }}
          />
          <Button
            isDisabled={isDisabledButton.buttons[2]}
            bgrUrl={pageInformation.questionImages.alternative3}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleAnswerClick(2, this);
            }}
          />
        </div>
        {showFeedback ? (
          <TextArea
            text={feedbackMessage}
            classPosition={"feedback-text-area"}
            classStyle={"feedback-text-area-style"}
          />
        ) : (
          <div />
        )}
        {showNextPageButton ? (
          <Button
            classPosition={"nextpage-button"}
            classStyle={"nextpage-button-style"}
            onClick={handleNewPage}
          />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
