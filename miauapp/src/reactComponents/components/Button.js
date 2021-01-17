import { React } from 'react';
import './styles.css';


export default function Button(props) {

    const handleClick = (event) => {
        props.OnClick();
    }
    let bgrUrl = props.bgrUrl;

    return (
        <div className={props.classPosition}>
            <button
            style={
              {background: 'url("' + bgrUrl + '")'}
            }
            className={props.classStyle}
            onClick={handleClick}>
                {props.buttonText}
            </button>
        </div>);
}
