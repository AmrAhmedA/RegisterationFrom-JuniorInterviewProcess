import React from 'react';
import './App.css';
import NavBar from "./components/navBar"
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <React.Fragment>
      <NavBar />
      {console.log("Don't worry, the app is working fine ;)")}
    </React.Fragment>
  );
}

export default App;
