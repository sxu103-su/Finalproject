import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Editpage from './editpage';
import Home from './homepage';
import Login from './loginpage';
import'./App.css';

export default function App() {
    return (
      <Router>
        <div className="container">
          <nav className="row mainnav">
          <span className="logo icon col-4"><Link to="/homepage">Profile|U</Link></span>
            <ul className="listhead col-3">
              <li className="col-6">
                <Link to="/editpage"><img  src={require("./picture/pencil.svg")} width="30 px" height="30 px"alt="edit"/></Link>
              </li>
              <li className="col-6">
                <Link to="/loginpage"><img  src={require("./picture/log.svg")} width="30 px" height="30 px"alt="login"/></Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/homepage">
              <Home />
            </Route>
            <Route path="/editpage">
              <Editpage />
            </Route>
            <Route path="/loginpage">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
 

