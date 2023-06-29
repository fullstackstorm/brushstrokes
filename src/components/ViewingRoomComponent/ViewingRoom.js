import React from "react";
import Painting from "../PaintingComponent/Painting";
import "./ViewingRoom.css"

function ViewingRoom({ gallery }) {
  return (
    <div className="Card-container">
      {gallery.map((painting) => (
        <Painting key={painting.id} painting={painting} />
      ))}
    </div>
  );
}

export default ViewingRoom;
