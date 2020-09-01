import React from 'react';
import './App.css';
import NavBar from "./components/navBar"
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from "./components/loginForm"
import HeadImage from "./components/headImage"
import StickySocialMedia from "./components/stickySocialMedia"
import Credits from "./components/credits"
function App() {
  return (
    <div>
      <StickySocialMedia />
      <NavBar />
      <HeadImage />
      <LoginForm />
      <Credits />
    </div>

  );
}

export default App;
