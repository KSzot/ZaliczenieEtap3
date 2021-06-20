import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { AuthStatus } from "../../redux/reducers/auth.reducer";
import { AuthActions } from "../../redux/actions/auth.actions";
import logo from "../../assets/logo.jpg";
const Navigation = (props) => {
  const auth = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
              />
              Gym Team
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {auth.status == AuthStatus.LOGOUTED ? (
                  <React.Fragment>
                    <Nav.Link href="/login">Logowanie</Nav.Link>
                    <Nav.Link href="/register">Rejestracja</Nav.Link>
                  </React.Fragment>
                ) : (
                  <Nav.Link onClick={() => dispatch(AuthActions.logout())}>
                    Wyloguj
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
