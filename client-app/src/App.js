import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import ImageDay from "./components/ImageDay";
import RandomImages from "./components/RandomImages";
import SearchImages from "./components/SearchImages";
import SavedImages from "./components/SavedImages";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div >
      <Navbar className="navbar navbar-expand navbar-light bg-light font-weight-bolder">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto" style={{ width: "80%" }}>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
            {currentUser && (
              <NavDropdown title="Imagery" id="basic-nav-dropdown">
                <Link to={"/imageDay"} className="nav-link">
                  Image of the Day
                </Link>
                <Link to={"/searchImages"} className="nav-link">
                  Search Images
                </Link>
                <Link to={"/randomImages"} className="nav-link">
                  Random Images
                </Link>
                <Link to={"/savedImages"} className="nav-link">
                  Saved Images
                </Link>
              </NavDropdown>
            )}
          </Nav>

          {currentUser ? (
            <Nav className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  Logout
                </a>
              </li>
            </Nav>
          ) : (
            <Nav className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/imageDay" component={ImageDay} />
          <Route path="/randomImages" component={RandomImages} />
          <Route path="/searchImages" component={SearchImages} />
          <Route path="/savedImages" component={SavedImages} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
