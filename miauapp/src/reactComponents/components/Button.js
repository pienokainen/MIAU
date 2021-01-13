import { React } from 'react';
import './styles.css';


export default function Button(props) {

    const handleClick = (event) => {
        props.OnClick();
    }

    return (
        <div class={props.classPosition}>
            <button class={props.classStyle} OnClick={handleClick}>
                {props.buttonText}
            </button>
        </div>);
}