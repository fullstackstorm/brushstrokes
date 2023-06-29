import React, { useState } from "react";

function Form({ artist, setCollection }) {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCollection(name, artist.name)
    setName("");
  }

  return (
    <div>
      <h3>Interested in this artist?</h3>
      <p>
        Add their paintings to you personal art collection. Fill out the form
        below to add to your collection.
      </p>
      <form onSubmit={handleSubmit}>
        To add {artist.name}'s art to your collection, input your name:
        <br />
        <input type="text" value={name} onChange={handleNameChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
