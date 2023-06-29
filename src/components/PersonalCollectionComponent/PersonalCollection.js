import React from "react";
import Painting from "../PaintingComponent/Painting";
import { v4 as uuidv4 } from "uuid";

function PersonalCollection({ user, collection }) {
  if (collection.length === 0) {
    return (
      <div>
        <h1>Your collection is currently empty!</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user.name}'s Personal Art Collection</h1>
      {collection.map((painting) => (
        <Painting key={uuidv4()} painting={painting} />
      ))}
    </div>
  );
}

export default PersonalCollection;
