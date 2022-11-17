

const baseUrl =
  "https://youtube.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_PROJECT_REACT_KEY}";

fetch(baseUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
  });
