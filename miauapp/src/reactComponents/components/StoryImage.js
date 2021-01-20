import { React } from 'react';
import './styles.css';


export default function StoryImage(props) {

    return (
        <div class={props.classPosition}>
            <img className={props.classStyle} 
            src={props.image}/>
        </div>);
}
