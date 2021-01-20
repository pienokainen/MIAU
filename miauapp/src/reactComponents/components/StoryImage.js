import { React } from "react";
import "./styles.css";

export default function StoryImage(props) {
  return (
    <div className={props.classPosition}>
      <img
        className={props.classStyle}
        src={props.image}
        alt="Not able to download, try again later"
      />
    </div>
  );
}
