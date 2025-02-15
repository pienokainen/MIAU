import { React, useState } from "react";
import Button from "../components/Button.js";
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
  const [pointsSet, setPointsSet] = useState(false);
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
        return "HY-VÄ, TIE-NA-SIT YH-DEN KO-LI-KON!";
      case 4:
        return "VOI EI, NYT ME-NI PIE-LEEN, Y-RI-TÄ UU-DEL-LEEN";
      default:
        return;
    }
  };

  const answerSuccess = () => {
    setTimeout(function () {
      setShowNextPageButton(true);
    }, 1350);
  };

  const updateFeedback = (buttonIndex) => {
    setFeedbackMessage(getFeedbackText(buttonIndex));
    setShowFeedback(true);
  };

  const handleAnswerClick = (buttonIndex) => {
    if (pointsSet) {
      return;
    }

    if (buttonIndex === pageInformation.correct) {
      updateFeedback(3);
      setPoints(points + 1);
      setPointsSet(true);
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
            classStyle={"questionnaire-text-area-style"}
          />
        ) : (
          <div />
        )}
        {showNextPageButton ? (
          <Button
            bgrUrl={"./databaseMock/images/next-page-button.png"}
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
