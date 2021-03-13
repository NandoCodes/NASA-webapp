import React, { Component } from "react";

import {
  Form,
  InputGroup,
  Row,
  Col,
  Card,
  FormControl,
  Button,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = { email: "", password: "" };

  credentialChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { email, password } = this.state;

    return (
      <Row className="justify-content-md-center">
        <Col xs={5}>
          <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Card.Header>
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      required
                      autoComplete="off"
                      type="text"
                      name="email"
                      value={email}
                      onChange={this.credentialChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter Email Address"
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      required
                      autoComplete="off"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.credentialChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter Password"
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ "text-align": "right" }}>
              <Button
                size="sm"
                type="button"
                variant="success"
                onClick={this.validateUser}
                disabled={
                  this.state.email.length === 0 ||
                  this.state.password.length === 0
                }
              >
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Button>{" "}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Login;