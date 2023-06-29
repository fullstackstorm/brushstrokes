import React from "react";
import Painting from "../PaintingComponent/Painting";

function PersonalCollection({ collection }) {
  return (
    <div>
      {collection.map((painting) => (
        <Painting key={painting.id} painting={painting} />
      ))}
    </div>
  );
}

export default PersonalCollection;
