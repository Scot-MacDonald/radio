import { useState } from "react";
import Footer from "./Footer";

const trackList = [
  {
    title: "The colour of pomegranates",
    url: "https://soundcloud.com/nts-latest/time-is-away-the-colour-of-pomegranates-180520",
    tag: "House",
  },
  {
    title: "Iniseto",
    url: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
    tag: "Folk",
  },
  // Add more tracks as needed
];

export default function TrackList() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const playTrack = (url) => {
    setSelectedTrack(url);
  };

  return (
    <div>
      <h2>Track List</h2>
      <ul>
        {trackList.map((track, index) => (
          <li key={index}>
            {track.title} - {track.tag}
            <button onClick={() => playTrack(track.url)}>Play</button>
          </li>
        ))}
      </ul>
      <Footer selectedTrack={selectedTrack} />
    </div>
  );
}
