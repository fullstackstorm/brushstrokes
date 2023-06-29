import React from "react";
import Painting from "../PaintingComponent/Painting";

function ViewingRoom({ gallery }) {
  return (
    <div>
      {gallery.map((painting) => (
        <Painting key={painting.id} painting={painting} />
      ))}
    </div>
  );
}

export default ViewingRoom;
