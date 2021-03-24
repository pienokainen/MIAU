import { React } from "react";
import "./styles.css";

export default function Stipend(props) {
  return (
    <div className={props.classPosition}>
      <h3 style={{ maxWidth: "30em" }}>
        {" "}
        KII-TOS KOA-LAN LII-KEN-NE-TES-TIN SUO-RIT-TA-MI-SES-TA, AL-LA
        STI-PEN-DI.{" "}
      </h3>
      <img
        className="stipend-image"
        src="./databaseMock/images/stipendi.jpg"
        alt="Not able to download, try again later"
      />
    </div>
  );
}
