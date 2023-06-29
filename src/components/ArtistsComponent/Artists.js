import React from "react";
import Artist from "../ArtistComponent/Artist";
import "./Artists.css"

function Artists({ artists }) {
  return (
    <div className="Card-container">
      {artists.map((artist) => (
        <Artist key={artist.id} artist={artist} />
      ))}
    </div>
  );
}

export default Artists;
