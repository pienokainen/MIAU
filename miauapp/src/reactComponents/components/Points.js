import React, { useState, useEffect } from "react";

export default function Points(props) {
  useEffect(() => {
    setPointsImage();
  }, [props.points]);

  const [pointsImagePath, setPointsImagePath] = useState(
    "./databaseMock/images/kolikko1.png"
  );

  const setPointsImage = () => {
    if (props.points <= 2) {
      setPointsImagePath("./databaseMock/images/kolikko1.png");
    } else if (props.points <= 5) {
      setPointsImagePath("./databaseMock/images/kolikko2.png");
    } else {
      setPointsImagePath("./databaseMock/images/kolikko3.png");
    }
  };

  return (
    <div>
      <div className={props.classPosition}>
        <img
          src={pointsImagePath}
          className={props.classStyle}
          alt="Cannot load picture, please try again later"
        />
      </div>
      <h5 className="point-text-style">{props.points} X</h5>
    </div>
  );
}
