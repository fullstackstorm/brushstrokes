import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

function ArtistPage() {
  const location = useLocation();
  const artist = location.state.artist;

  return (
    <div>
      <p>
        <img src={artist.image} alt={`self-portrait of ${artist.name}`} />
        <h2>{artist.name}</h2>
        <h3>
          Born: {artist.born} Died: {artist.died}
        </h3>
        <p>{artist.biography}</p>
      </p>
      <img src={artist.signature} alt="artist's signature" />
    </div>
  );
}

export default ArtistPage;
