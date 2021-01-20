import { React } from "react";
import Stipend from "../components/Stipend.js";

export default function ReportPage(props) {
  // const handlePageChange = (event) => {
  //   let msg = { tab: event.target.tab };
  //   props.handlePageChange(msg);
  // };
  // const handlePrintView = (event) => {
  //   return;
  // };

  return (
    <div>
      {/* Palautekenttä? */}
      {/* Stipend */}
      <Stipend classPosition={""} />
    </div>
  );
}
