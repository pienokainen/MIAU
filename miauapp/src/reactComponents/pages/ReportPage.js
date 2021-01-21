import { React } from "react";
import Stipend from "../components/Stipend.js";
import Button from "../components/Button.js";

export default function ReportPage(props) {
  // const handlePageChange = (event) => {
  //   let msg = { tab: event.target.tab };
  //   props.handlePageChange(msg);
  // };
  // const handlePrintView = (event) => {
  //   return;
  // };
  const handlePrint = () => {
    window.print();
  };
  const handleHomeButton = () => {
    props.handlePageChange();
  };
  return (
    <div>
      <div id="wrapper">
      {/* Palautekenttä? */}
      {/* Stipend */}
      <Stipend classPosition={""} />
      
      </div>
      <Button
        bgrUrl={
          "https://static.thenounproject.com/png/1150993-200.png"
        }
        classPosition={"position-top-right"}
        classStyle={"print-button-style"}
        onClick={handlePrint}
      />
      <Button
        bgrUrl={
          "https://static.thenounproject.com/png/890787-200.png"
        }
        classPosition={"home-button"}
        classStyle={"print-button-style"}
        onClick={handleHomeButton}
      />
    </div>
  );
}
