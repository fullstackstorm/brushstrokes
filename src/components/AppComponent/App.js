import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from '../HomeComponent/Home';
import ViewingRoom from '../ViewingRoomComponent/ViewingRoom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={["/", "/viewing-room", "/artists"]}>
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
