import { React } from "react";
import { GetStoryItems } from "../../services";
import Button from "../components/Button.js";
import "./styles.css";

export default function QuestionnairePage({
  handlePageChange,
  pageInformation,
}) {
  const [isEnabled, setIsEnabled] = useState(true);

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

    this.setState({
      isEnabled: false,
    });

    // TODO: logic to handle negative feedback
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
