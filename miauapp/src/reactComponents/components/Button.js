import React, { useState } from "react";
import "./styles.css";

export default function Button(props) {
  const [isEnabled, setIsEnabled] = useState(true);

  const renderButton = () => {
    if (props.bgrUrl !== undefined) {
      return (
        <button
          style={{ backgroundImage: `url("${props.bgrUrl}")` }}
          className={props.classStyle}
          onClick={handleClick}
        >
          {props.buttonText}
        </button>
      );
    }

    if (!props.isEnabled) {
      return (
        <overlay>
          <button className={props.classStyle} onClick={handleClick}>
            {props.buttonText}
          </button>
        </overlay>
      );
    }

    return <button className={props.classStyle}>{props.buttonText}</button>;
  };

  const handleClick = (event) => {
    props.onClick();
  };

  return <div className={props.classPosition}>{renderButton()}</div>;
}
