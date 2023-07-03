import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="App-header">
      <div>
        <NavLink to="/viewing-room" exact>
          Viewing Room
        </NavLink>
      </div>
      <div>
        <NavLink to="/artists" exact>
          Artists
        </NavLink>
      </div>
      <div>
        <NavLink to="/personal-collection" exact>
          Your Art Collection
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
