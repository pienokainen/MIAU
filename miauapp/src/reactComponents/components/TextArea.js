import { React } from "react";
import './styles.css';

export default function TextArea(props) {

  return (
    <div className={props.classPosition}>
      <p className={props.classStyle}> 
      {props.text}
      </p>
    </div>);
}
