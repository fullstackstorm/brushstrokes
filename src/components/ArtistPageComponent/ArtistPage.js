import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import Form from "../FormComponent/Form";
import Artist from "../ArtistComponent/Artist";
import "./ArtistPage.css";

function ArtistPage({ setCollection }) {
  const location = useLocation();
  const artist = location.state.artist;

  return (
    <div className="artist-page">
      {" "}
      <div>
        <Artist className="floatingComponent" artist={artist} />
        <h3 className="life">
          Born: {artist.born} Died: {artist.died}
        </h3>
        <img
          className="signature"
          src={artist.signature}
          alt="artist's signature"
        />
      </div>
      <p className="biography">{artist.biography}</p>
      <Form artist={artist} setCollection={setCollection}></Form>
      <br />
    </div>
  );
}

export default ArtistPage;
