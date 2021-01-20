import { React, useState } from "react";
import Button from "../components/Button.js";
import "./styles.css";

export default function QuestionnairePage({
  handlePageChange,
  pageInformation,
}) {
  const [isDisabledButton, setIsDisabledButton] = useState({
    buttons: {
      0: false,
      1: false,
      2: false,
    },
  });

  const handleClick = (buttonIndex, button) => {
    if (buttonIndex === -1) {
      handlePageChange();
    }

    if (buttonIndex === pageInformation.correct) {
      // TODO: logic to handle positive feedback. Perhaps timeout to let person read and then continue?

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

    console.log(isDisabledButton);
  };

  let bgrUrls = [];
  bgrUrls[0] = "./databaseMock/images/suojatie.png";
  bgrUrls[1] = "./databaseMock/images/vilperi.webp";
  bgrUrls[2] = "./databaseMock/images/stop.png";

  return (
    <div>
      <div id="wrapper">
        <h3> {pageInformation.text} </h3>
        <div className="button-group">
          <Button
            isDisabled={isDisabledButton.buttons[0]}
            bgrUrl={bgrUrls[0]}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleClick(0, this);
            }}
          />
          <Button
            isDisabled={isDisabledButton.buttons[1]}
            bgrUrl={bgrUrls[1]}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleClick(1, this);
            }}
          />
          <Button
            isDisabled={isDisabledButton.buttons[2]}
            bgrUrl={bgrUrls[2]}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleClick(2, this);
            }}
          />
        </div>
      </div>
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
