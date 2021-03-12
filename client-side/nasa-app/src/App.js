import "./App.css";
import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Register from "./components/user/Register";
import Login from "./components/user/Login";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Switch>
            <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
