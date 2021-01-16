export const loadStory = (props) => {
    
    //const storyIndex = props.storyIndex.ToString();

    const storyIndex = 1;

    fetch("./databaseMock/story" + storyIndex + ".json")
        .then(response => response.text())
        .then(text => console.log(text))
}