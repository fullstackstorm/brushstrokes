import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import Form from "../FormComponent/Form";

function ArtistPage({ setCollection }) {
  const location = useLocation();
  const artist = location.state.artist;

  return (
    <div>
      <img src={artist.image} alt={`self-portrait of ${artist.name}`} />
      <h2>{artist.name}</h2>
      <h3>
        Born: {artist.born} Died: {artist.died}
      </h3>
      <p>{artist.biography}</p>
      <img src={artist.signature} alt="artist's signature" />
      <Form artist={artist} setCollection={setCollection}></Form>
      <br />
    </div>
  );
}

export default ArtistPage;
