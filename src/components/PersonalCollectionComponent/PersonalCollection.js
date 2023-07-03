import React from "react";
import Painting from "../PaintingComponent/Painting";
import { v4 as uuidv4 } from "uuid";
import "./PersonalCollection.css";
import "../PaintingComponent/Painting.css";

function PersonalCollection({ user, collection }) {
  if (collection.length === 0) {
    return (
      <div className="Collection-title">
        <h1>Your collection is currently empty!</h1>
      </div>
    );
  }

  return (
    <>
      <h1 className="Collection-title">
        {user.name}'s Personal Art Collection
      </h1>
      <div className="Collection-container">
        {collection.map((painting) => (
          <Painting key={uuidv4()} painting={painting} />
        ))}
      </div>
    </>
  );
}

export default PersonalCollection;
