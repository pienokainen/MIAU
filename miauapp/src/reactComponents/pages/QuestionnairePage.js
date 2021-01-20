import { React } from "react";
import Button from "../components/Button.js";
import TextArea from "../components/TextArea.js";
import "./styles.css";

export default function QuestionnairePage({
  handlePageChange,
  pageInformation,
}) {
  const handleClick = (index, button) => {
    // TODO: logic to handle answering

    if (index === -1) {
      handlePageChange();
    }

    if (index === pageInformation.correct) {
      // TODO: logic to handle positive feedback. Perhaps timeout to let person read and then continue?

      handlePageChange();
      return;
    }

    // TODO: logic to handle negative feedback
  };
  let bgrUrls = [];
  bgrUrls[0] = "./databaseMock/images/suojatie.png";
  bgrUrls[1] = "./databaseMock/images/vilperi.webp";
  bgrUrls[2] = "./databaseMock/images/stop.png";

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
            isEnabled={true}
            bgrUrl={bgrUrls[0]}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleClick(0, this);
            }}
          />
          <Button
            isEnabled={true}
            bgrUrl={bgrUrls[1]}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
            onClick={() => {
              handleClick(1, this);
            }}
          />
          <Button
            isEnabled={true}
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
