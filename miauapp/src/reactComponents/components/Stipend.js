import { React } from "react";
import "./styles.css";
import Button from "./Button";

export default function Stipend(props) {

  return (
    <div className={props.classPosition}>
      <h3> Kiitos Koalan Liikennetestin suorittamisesta, alla stipendi. </h3>
      <img
        className="stipend-image"
        src="./databaseMock/images/stipendi.jpg"
        alt="Not able to download, try again later"
      />
      
    </div>
  );
}
