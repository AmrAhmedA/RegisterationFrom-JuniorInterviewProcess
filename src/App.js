import React from 'react';
import './App.css';
import NavBar from "./components/navBar"
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from "./components/loginForm"
import HeadImage from "./components/headImage"
function App() {
  return (
    <React.Fragment>
      <NavBar />
      < HeadImage />
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="row ">
          <div className="col-12 ">
            <LoginForm />
            {console.log("The app is working fine ;)")}
            <hr></hr>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
