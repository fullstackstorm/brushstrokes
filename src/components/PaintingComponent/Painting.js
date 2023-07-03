import React from "react";
import "./Painting.css";

function Painting({ painting }) {
  return (
    <div className="Card">
      <h2 className="Card-title">
        {painting.name}, {painting.year}
      </h2>
      <img src={painting.image} alt={painting.name} className="Card-image" />
      <h3 className="Card-artist">{painting.artist}</h3>
    </div>
  );
}

export default Painting;
