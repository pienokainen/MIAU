import { React } from 'react';
import Stipend from '../components/Stipend.js';
import Button from '../components/Button.js';



export default function ReportPage(props) {

  const handlePageChange = (event) => {
      let msg = {tab: event.target.tab}
      props.handlePageChange(msg);
  }
  const handlePrintView = (event) => {
      return;
  }

    return (
      <div>
      {/* Palautekenttä? */}
      {/* Stipend */}
      <Stipend
      classPosition={""}
      />
      {/* Homebutton */}
      <Button
      buttonText={""}
      classPosition={""}
      classStyle={""}
      OnClick={handlePageChange}/>
      {/* PrintButton */}
      <Button
      buttonText={""}
      classPosition={""}
      classStyle={""}
      OnClick={handlePrintView}/>
      </div>
    );
}
