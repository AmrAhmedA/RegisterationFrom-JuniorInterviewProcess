import React from 'react';
import './App.css';
import NavBar from "./components/navBar"
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from "./components/loginForm"
import HeadImage from "./components/headImage"
import StickySocialMedia from "./components/stickySocialMedia"
function App() {
  return (
    <div>
      <NavBar />
      <HeadImage />
      <LoginForm />
      <StickySocialMedia />
      {console.log("The app is working fine ;)")}
    </div>

  );
}

export default App;
