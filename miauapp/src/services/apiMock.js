

const loadStory = (props) => {
    const storyIndex = props.storyIndex.ToString();

    fetch("./databaseMock/story" + storyIndex + ".json")
        .then(response => response.text())
        .then(text => console.log(text))
}