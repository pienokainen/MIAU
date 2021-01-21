import React, { useEffect } from "react";

export default function Points(props) {
  return (
    <div className={props.classPosition}>
      <div>{props.points} X</div>
      <img
        src="./databaseMock/images/kolikko1.png"
        className={props.classStyle}
        alt="Cannot load picture, please try again later"
      />
    </div>
  );
}
