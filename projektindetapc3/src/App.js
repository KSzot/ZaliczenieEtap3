import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation, Footer } from "./components";
import { Home, Register, Login } from "./pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/HOC/PrivateRoute";
const App = () => {
  return (
    <Router>
      <Navigation />

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
