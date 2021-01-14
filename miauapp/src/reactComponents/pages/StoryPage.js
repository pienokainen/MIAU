import { React } from 'react';
import TextArea from '../components/TextArea.js';
import StoryImage from '../components/StoryImage.js';
import Button from '../components/Button.js';


export default function StoryPage(props) {

  let pageinformation = {
    text: "newStory.. ",
    image: "storyimage here"
  }

  const handlePageChange = (event) => {
      let msg = {tab: event.target.tab}
      props.handlePageChange(msg);
  }

  return (
    <div>
      {/* Story text area */}
      <TextArea
      text={pageinformation.text}
      classPosition={""}
      classStyle={""}
      />
      {/* Story image */}
      <StoryImage
      image={pageinformation.image}
      classPosition={""}
      classStyle={""}
      />
      {/* Next page button */}
      <Button
      buttonText={""}
      classPosition={""}
      classStyle={""}
      OnClick={handlePageChange}/>

    </div>
  );
}
