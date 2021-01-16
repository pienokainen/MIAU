import { React } from 'react';
import './styles.css';


export default function Button(props) {

    const handleClick = (event) => {
        props.OnClick();
    }

    return (
        <div className={props.classPosition}>
            <button className={props.classStyle} onClick={handleClick}>
                {props.buttonText}
            </button>
        </div>);
}