import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  ButtonGroup,
  NavLink
} from "reactstrap";

import { Link } from "react-router-dom";

import wheelsLogo from "../../img/wheels-logo.png";

class AppFooter extends Component {
  state = {};
  render() {
    return (
      <div className="bg-white app-footer">
        <Container>
          <Navbar color="white" light>
            <Link className="navbar-brand" to="/">
              <img src={wheelsLogo} alt="" style={{ height: "3rem" }} />
            </Link>
            <Nav>
              <NavItem>© Wheels Rent 2018</NavItem>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default AppFooter;
