import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "../HeaderComponent/Header";
import Home from "../HomeComponent/Home";
import ViewingRoom from "../ViewingRoomComponent/ViewingRoom";
import Artists from "../ArtistsComponent/Artists";
import ArtistPage from "../ArtistPageComponent/ArtistPage";
import PersonalCollection from "../PersonalCollectionComponent/PersonalCollection";

function App() {
  const history = useHistory();
  const [gallery, setGallery] = useState([]);
  const [artists, setArtists] = useState([]);
  const [collection, setCollection] = useState([]);
  const [user, setUser] = useState({});

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
    async function fetchData() {
      return await fetch("http://localhost:3001/user")
        .then((r) => r.json())
        .then((data) => {
          if (Object.keys(data).length !== 0) {
            setUser(data);
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
    setUser({ name: name });
  }

  useEffect(() => {
    async function postData() {
      if (user.length > 0) {
        console.log(JSON.stringify(user));
        await fetch("http://localhost:3001/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
      }

      if (collection.length > 0) {
        console.log(JSON.stringify(collection));
        await fetch("http://localhost:3001/collection", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(collection),
        });
      }

      history.push("/personal-collection");
    }

    postData();
  }, [collection, history, user]);

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
          <PersonalCollection user={user} collection={collection} />
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
