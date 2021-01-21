import { React } from "react";
import "./styles.css";
import Button from "./Button";

export default function Stipend(props) {
  const handleClick = () => {
    window.print();
  };
  return (
    <div className={props.classPosition}>
      <h3> Kii-tos Koa-lan Lii-ken-ne-tes-tin suo-rit-ta-mi-ses-ta, al-la sti-pen-di. </h3>
      <img
        className="stipend-image"
        src="./databaseMock/images/stipendi.jpg"
        alt="Not able to download, try again later"
      />
      <Button
        bgrUrl={
          "https://cdn0.iconfinder.com/data/icons/print-7/24/Print_Button_printer-512.png"
        }
        classPosition={"print-button"}
        classStyle={"print-button-style"}
        onClick={handleClick}
      />
    </div>
  );
}
