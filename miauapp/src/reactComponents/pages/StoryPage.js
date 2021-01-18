import { React } from 'react';
import TextArea from '../components/TextArea.js';
import StoryImage from '../components/StoryImage.js';
import Button from '../components/Button.js';


export default function StoryPage(props) {

  const handlePageChange = (event) => {
    props.handlePageChange();
  }

  return (

    <div>
      {/* Story text area */}
      <TextArea
      text={props.pageInformation.text}
      classPosition={""}
      classStyle={""}
      />
      {/* Story image */}
      <StoryImage
      image={props.pageInformation.storyImage.imageLocation}
      classPosition={""}
      classStyle={""}
      />
      {/* Next page button */}
      <Button
      classPosition={"nextpage-button"} 
      classStyle={"nextpage-button-style"}
      onClick={handlePageChange}/>

    </div>
  );
}
