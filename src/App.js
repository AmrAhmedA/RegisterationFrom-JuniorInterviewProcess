import React from 'react';
import './App.css';
import NavBar from "./components/navBar"
import 'bootstrap/dist/css/bootstrap.css';
// import LoginForm from "./components/loginForm"
import HeadImage from "./components/headImage"
import StickySocialMedia from "./components/stickySocialMedia"
import Credits from "./components/credits"
import RegisterForm from "./components/registerForm"
function App() {
  // const warningTitleCSS =
  //   "color:red; font-size:50px; font-weight: bold; -webkit-text-stroke: 1px black;";
  return (
    <div>
      <StickySocialMedia />
      <NavBar />
      <HeadImage />
      <RegisterForm />
      <Credits />
      {/* {setTimeout(
        console.log.bind(console, "%c#Amr Gewaly 🔥🔥😄🔥🔥 ", warningTitleCSS),
        0
      )} */}
    </div>

  );
}

export default App;
