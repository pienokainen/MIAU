// Function updates list of objects used by the story array directly
export async function UpdateStoryItems(id) {
  const newUrl = `./databaseMock/${id}.json`;
  const result = await HttpRequest(newUrl);

  return result;
}

// Function returns json object. Handle data later!
async function HttpRequest(url) {
  let result = null;

  try {
    let response = await fetch(url);
    result = await response.json();
  } catch (err) {
    console.log("Error while loading items.");
  }

  return result;
}
