// Function updates list of objects used by the story array directly
export async function UpdateStoryItems (url, setStoryItems, setIsLoading) {

    if (url === "") {
        const newUrl = "./databaseMock/story1.json";
        const result = await HttpRequest(newUrl);

        if (result !== null) {
            setStoryItems(result);
        }
    }
    else {
        console.log("Fetch tried with real url! Backend not yet implemented, use blank string instead");
    }

    setIsLoading(false);
}

// Function returns json object. Handle data later!
async function HttpRequest(url) {

    let result = null;

    try{
        let response = await fetch(url);
        result = await response.json();
    }
    catch (err) {
        console.log("Error while loading items.");
    }
    
    return result;
}

export function services () {

    const GetView = (props) => {
        


        return;
        //loadStory();
    };

    const NextView = (props) => {
        
    }

    const AnswerIncorrect = (props) => {

    }

    const NextStory = (props) => {

    }

    const ToQuestionnaire = (props) => {

    }
    return;
}