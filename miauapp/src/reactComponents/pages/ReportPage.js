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
      {/* Palautekenttä? */}
      {/* Stipend */}
      <Stipend classPosition={""} />
      <Button
        bgrUrl={
          "https://cdn0.iconfinder.com/data/icons/print-7/24/Print_Button_printer-512.png"
        }
        classPosition={"print-button"}
        classStyle={"print-button-style"}
        onClick={handlePrint}
      />
      <Button
        bgrUrl={
          "https://cdn0.iconfinder.com/data/icons/print-7/24/Print_Button_printer-512.png"
        }
        classPosition={"home-button"}
        classStyle={"print-button-style"}
        onClick={handleHomeButton}
      />
    </div>
  );
}
