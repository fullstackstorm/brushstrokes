import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "../HeaderComponent/Header";
import Home from "../HomeComponent/Home";
import ViewingRoom from "../ViewingRoomComponent/ViewingRoom";
import Artists from "../ArtistsComponent/Artists";
import ArtistPage from "../ArtistPageComponent/ArtistPage";
import PersonalCollection from "../PersonalCollectionComponent/PersonalCollection";

function App() {
  const [gallery, setGallery] = useState([]);
  const [artists, setArtists] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    async function fetchData() {
      return await fetch("http://localhost:3001/gallery")
        .then((r) => r.json())
        .then((data) => setGallery(data));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      return await fetch("http://localhost:3001/artists")
        .then((r) => r.json())
        .then((data) => setArtists(data));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      return await fetch("http://localhost:3001/collection")
        .then((r) => r.json())
        .then((data) => {
          if (Object.keys(data).length !== 0) {
            setCollection(data);
          }
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(collection);
  }, [collection]);

  function handleCollectionUpdate(name, artistName) {
    const artistCollection = gallery.filter(
      (painting) => painting.artist === artistName
    );
    setCollection((prevCollection) => [...prevCollection, ...artistCollection]);
  }
  
  useEffect(() => {
    if (collection.length > 0) {
      async function postData() {
        await fetch("http://localhost:3001/collection", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(collection),
        });
      }
  
      postData();
    }
  }, [collection]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/viewing-room">
          <ViewingRoom gallery={gallery} />
        </Route>
        <Route path="/artists/:id">
          <ArtistPage setCollection={handleCollectionUpdate} />
        </Route>
        <Route path="/artists">
          <Artists artists={artists} />
        </Route>
        <Route path="/personal-collection">
          <PersonalCollection collection={collection} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
