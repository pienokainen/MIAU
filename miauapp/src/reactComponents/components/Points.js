import React, { useEffect } from "react";

export default function Points(props) {
  return (
    <div>
    <div className={props.classPosition}>
      <img
        src="./databaseMock/images/kolikko1.png"
        className={props.classStyle}
        alt="Cannot load picture, please try again later"
      />
    </div>
      <h5 className="point-text-style">{props.points} X</h5>
    </div>
  );
}
