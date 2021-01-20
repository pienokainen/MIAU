import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Button(props) {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (props.isDisabled === undefined) {
      return;
    }

    setIsDisabled(props.isDisabled);
  }, [props.isDisabled]);

  const setBackgroundImage = () => {
    if (props.bgrUrl === undefined) {
      return;
    }

    return {
      backgroundImage: `url("${props.bgrUrl}")`,
    };
  };

  const handleClick = () => {
    props.onClick();
  };

  return (
    <div className={props.classPosition}>
      <button
        style={setBackgroundImage()}
        className={props.classStyle}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {props.buttonText}
      </button>
    </div>
  );
}
