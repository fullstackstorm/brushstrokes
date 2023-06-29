import React from "react";
import { Link, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

function Artist({ artist }) {
  const match = useRouteMatch();

  return (
    <Link to={{ pathname: `${match.url}/${artist.id}`, state: { artist } }}>
      <div>
        <img src={artist.image} alt={`self-portrait of ${artist.name}`} />
        <h2>{artist.name}</h2>
      </div>
    </Link>
  );
}

export default Artist;
