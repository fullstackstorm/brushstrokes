import React from "react";
import Artist from "../ArtistComponent/Artist";

function Artists({ artists }) {
  return (
    <div>
      {artists.map((artist) => (
        <Artist key={artist.id} artist={artist} />
      ))}
    </div>
  );
}

export default Artists;
