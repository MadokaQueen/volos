import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  ButtonGroup
} from "reactstrap";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setLang } from "../../modules/actions/langActions";
import { setCity } from "../../modules/actions/cityActions";
import PropTypes from "prop-types";

import wheelsLogo from "../../img/wheels-logo.png";

import "./AppNavbar.css";

import CityModal from "./CityModal";

class AppNavbar extends Component {
  state = {
    isOpen: false,
    openModal: false
  };
  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  render() {
    let { city } = this.props.city;
    let { lang } = this.props.lang;

    let text;

    if (lang === "ru") {
      text = {
        catalogue: "Каталог",
        rentalLocations: "Пункты проката",
        information: "Информация"
      };
    } else {
      text = {
        catalogue: "Catalogue",
        rentalLocations: "Rental locations",
        information: "Information"
      };
    }

    return (
      <div>
        <div className="nav-u" />
        <Navbar color="primary" dark expand="lg" className="app-navbar">
          <Container>
            <CityModal
              lang={lang}
              isOpen={this.state.openModal}
              toggle={() => this.setState({ openModal: false })}
            />
            <Link className="navbar-brand" to="/">
              <img src={wheelsLogo} alt="" style={{ height: "3rem" }} />
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/locations">
                    {text.rentalLocations}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/catalogue">
                    {text.catalogue}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/">
                    {text.information}
                  </Link>
                </NavItem>
                <NavItem className="pr-2 pt-1">
                  <Button
                    size="sm"
                    color="light"
                    onClick={() => this.setState({ openModal: true })}
                  >
                    {lang === "ru" ? city.ru : city.en}
                  </Button>
                </NavItem>
                <NavItem>
                  <ButtonGroup size="sm" className="pt-1">
                    <Button
                      color={lang !== "ru" ? "primary" : "light"}
                      onClick={() => this.props.setLang("ru")}
                    >
                      RU
                    </Button>
                    <Button
                      color={lang === "ru" ? "primary" : "light"}
                      onClick={() => this.props.setLang("en")}
                    >
                      EN
                    </Button>
                  </ButtonGroup>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

AppNavbar.propTypes = {
  setLang: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  lang: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lang: state.lang,
  city: state.city
});

export default connect(
  mapStateToProps,
  { setLang, setCity }
)(AppNavbar);
