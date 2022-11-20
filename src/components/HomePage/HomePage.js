import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  // const baseFeaturedVideos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=21&regionCode=US&key=${process.env.REACT_APP_API_KEY}`;

  // useEffect(() => {
  //   fetch(`${baseFeaturedVideos}`)
  //     .then((response) => response.json())
  //     .then((featured) => {
  //       console.log(featured);
  //     });
  // }, []);

  return (
    <div>
      <form>
        <input type="text" value="Search"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
