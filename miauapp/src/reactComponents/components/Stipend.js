import { React } from "react";
import "./styles.css";

export default function Stipend(props) {
  return (
    <div className={props.classPosition}>
      <h3 style={{maxWidth: "30em"}}>
        {" "}
        Kii-tos Koa-lan Lii-ken-ne-tes-tin suo-rit-ta-mi-ses-ta, al-la
        sti-pen-di.{" "}
      </h3>
      <img
        className="stipend-image"
        src="./databaseMock/images/stipendi.jpg"
        alt="Not able to download, try again later"
      />
    </div>
  );
}
