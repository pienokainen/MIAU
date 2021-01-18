import { React } from 'react';
import './styles.css';


export default function Button(props) {

    const handleClick = (event) => {
        props.onClick();
    }

    return (
        <div className={props.classPosition}>
        {props.bgrUrl !== undefined ?
          /* If there is a bgrUrl prop */
          <button
          style={
            {backgroundImage: `url("${props.bgrUrl}")`}
          }
          className={props.classStyle}
          onClick={handleClick}>
              {props.buttonText}
          </button>
          :
          /* If there isn't a bgrUrlprop */
          <button
          className={props.classStyle}
          onClick={handleClick}>
              {props.buttonText}
          </button>
        }

        </div>);
}
