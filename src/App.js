import React from 'react';
import './App.css';
import NavBar from "./components/navBar"
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from "./components/loginForm"
import HeadImage from "./components/headImage"
import StickySocialMedia from "./components/stickySocialMedia"
import Credits from "./components/credits"
import RegisterForm from "./components/registerForm"
import NotFound from "./components/notFound"
import Research from "./components/research"
import Education from "./components/education"
import Innovation from "./components/innovation"
import { Route, Switch, Redirect } from 'react-router-dom'
function App() {
  // const warningTitleCSS =
  //   "color:red; font-size:50px; font-weight: bold; -webkit-text-stroke: 1px black;";
  return (
    <div>
      <StickySocialMedia />
      <NavBar />
      <HeadImage />
      <div className="content">
        <Switch >
          <Route path="/Register" component={RegisterForm} />
          <Route path="/Login" exact component={LoginForm} />
          <Route path="/Research" exact component={Research} />
          <Route path="/Education" exact component={Education} />
          <Route path="/Innovation" exact component={Innovation} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Credits />
      {/* {setTimeout(
        console.log.bind(console, "%c#Amr Gewaly 🔥🔥😄🔥🔥 ", warningTitleCSS),
        0
      )} */}
    </div>

  );
}

export default App;
