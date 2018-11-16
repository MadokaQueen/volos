import React, { Component } from "react";
import { Container, Row } from "reactstrap";

import "./Catalogue.css";

import Filter from "./Filter/Filter";
import Cars from "./Cars/Cars";

import CityModal from "../AppNavbar/CityModal";

import { connect } from "react-redux";
import { getCars } from "../../modules/actions/carActions";
import PropTypes from "prop-types";

class Catalogue extends Component {
  state = {
    filter: {
      vehicleClass: "Any",
      typeOfFuel: "Any",
      transmission: "Any"
    },
    openModal: false
  };
  getFilteredCars = () => {
    let { cars } = this.props.cars;
    let { filter } = this.state;
    let filteredCars = cars.filter(
      car =>
        (filter.vehicleClass === "Any" ||
          filter.vehicleClass === car.vehicleClass) &&
        (filter.typeOfFuel === "Any" || filter.typeOfFuel === car.typeOfFuel) &&
        (filter.transmission === "Any" ||
          filter.transmission === car.transmission)
    );

    return filteredCars;
  };
  componentDidMount() {
    if (!this.props.cars.loaded) this.props.getCars();
  }
  render() {
    let { city } = this.props.city;
    let { lang } = this.props.lang;
    let text;
    if (lang === "ru") {
      text = {
        h1: "Аренда авто в городе",
        change: "изменить"
      };
    } else {
      text = {
        h1: "Car rent in ",
        change: "change"
      };
    }

    let cars = this.getFilteredCars();

    return (
      <div>
        <CityModal
          lang={lang}
          isOpen={this.state.openModal}
          toggle={() => this.setState({ openModal: false })}
        />
        <Container>
          <h1 className="text-center black-t mb-4 py-4">
            {text.h1}
            <span className="col-primary">
              {" " + (lang === "ru" ? city.ru : city.en) + " "}
            </span>
          </h1>
        </Container>

        <Container>
          <Row noGutters>
            <div className="col-md-3">
              <Filter
                filter={this.state.filter}
                setFilter={newFilter => this.setState({ filter: newFilter })}
                lang={lang}
              />
            </div>
            <div className="col">
              {cars != undefined ? <Cars cars={cars} lang={lang} /> : <div />}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

Catalogue.propTypes = {
  getCars: PropTypes.func.isRequired,
  cars: PropTypes.object.isRequired,
  lang: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cars: state.cars,
  lang: state.lang,
  city: state.city
});

export default connect(
  mapStateToProps,
  { getCars }
)(Catalogue);
