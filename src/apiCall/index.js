// Define a customFetch function that takes a URL and an options object as parameters
const customFetch = async (url, { body, ...rest }) => {
  // Create a config object with the provided options and set default headers
  const config = {
    ...rest,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  // Check if a request body is provided
  if (body) {
    // If a body is provided, convert it to a JSON string and assign it to the config object
    config.body = JSON.stringify(body);
  }

  try {
    // Send a request using the fetch function with the provided URL and config
    let response = await fetch(url, config);
    // Parse the response as JSON
    let data = await response.json();

    if (data) {
      // If data is successfully fetched, return the data
      return data;
    } else {
      // If data is not fetched, throw an error
      throw new Error("data not fetched");
    }
  } catch (error) {
    // Catch any errors that occur during the fetch request and log them to the console
    console.log(error);
  }
};

// Export the customFetch function as the default export of this module
export default customFetch;
