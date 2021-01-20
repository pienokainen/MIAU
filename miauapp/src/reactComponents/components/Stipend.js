import { React } from 'react';
import './styles.css';
import StoryImage from '../components/StoryImage.js';
import Button from './Button';


export default function Stipend(props) {

  const handleClick = (event) => {
    window.print();
  };
    return (
        <div class={props.classPosition}>
          <h3> Kiitos Koalan Liikennetestin suorittamisesta, alla stipendi. </h3>
          <img 
          className="stipend-image"
          src="./databaseMock/images/stipendi.jpg"/>
          <Button
            bgrUrl={"https://cdn0.iconfinder.com/data/icons/print-7/24/Print_Button_printer-512.png"}
            
            classPosition={"print-button"}
            classStyle={"print-button-style"}
            onClick={handleClick}
          />
        </div>
      );

      
}
