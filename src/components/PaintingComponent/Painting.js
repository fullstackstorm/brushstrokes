import React from "react";

function Painting({ painting }) {
  return (
    <div>
      <h2>
        {painting.name}, {painting.year}
      </h2>
      <img src={painting.image} alt={painting.name} />
      <h3>{painting.artist}</h3>
    </div>
  );
}

export default Painting;
