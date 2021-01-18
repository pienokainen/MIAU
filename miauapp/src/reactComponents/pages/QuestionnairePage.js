import { React } from "react";
import { GetStoryItems } from "../../services";
import Button from "../components/Button.js";
import "./styles.css";

export default function QuestionnairePage(props) {
  const handleClick = () => {
    // TODO: logic to handle answering
    let onLastPage = false;
    let correct = true;

    if (correct) {
      // TODO: logic to handle positive feedback. Perhaps timeout to let person read and then continue?

      if (onLastPage) {
        props.handlePageChange("reportPage");
        return;
      }

      // TODO: get correct data from database
      props.handlePageChange("storyPage");
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
        <h3> New Page </h3>
        <div className="button-group">
          <Button
            bgrUrl={bgrUrls[0]}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
          />
          <Button
            bgrUrl={bgrUrls[1]}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
          />
          <Button
            bgrUrl={bgrUrls[2]}
            classPosition={"questionnaire-button"}
            classStyle={"questionnaire-button-style"}
          />
        </div>
      </div>
      <Button
        classPosition={"nextpage-button"}
        classStyle={"nextpage-button-style"}
        onClick={handleClick}
      />
    </div>
  );
}
