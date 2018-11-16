import React, { Component } from "react";

import "./CarPage.css";

import { connect } from "react-redux";
import { getCarByAdress } from "../../modules/actions/carActions";
import PropTypes from "prop-types";

import CarInfo from "./CarInfo";

import { Container } from "reactstrap";

import CarModal from "./CarModal";

class CarPage extends Component {
  state = {
    imgSrc: "",
    openModal: false
  };

  onOpen = () => this.setState({ openModal: true });

  componentDidMount() {
    let { adress } = this.props.adress.match.params;
    this.props.getCarByAdress(adress);
  }

  render() {
    let car = this.props.cars.carByAdress;
    let { adress } = this.props.adress.match.params;

    let { lang } = this.props.lang;
    let { byAdressLoaded } = this.props.cars;

    let text;
    if (lang === "ru") {
      text = {
        rent: "Аренда ",
        typeOfFuel: {
          gasoline: "Бензин",
          diesel: "Дизель"
        },
        transmission: {
          manual: "Механника",
          automatic: "Автомат"
        },
        liters: "л",
        lPerKm: "л/100км",
        order: "Заказать"
      };
    } else {
      text = {
        rent: "Rent ",
        typeOfFuel: {
          gasoline: "Gasoline",
          diesel: "Diesel"
        },
        transmission: {
          manual: "Manual",
          automatic: "Automatic"
        },
        liters: "L",
        lPerKm: "L/100km",
        order: "Order"
      };
    }

    return (
      <div>
        <Container>
          <CarModal
            car={car}
            lang={lang}
            isOpen={this.state.openModal}
            toggle={() => this.setState({ openModal: false })}
          />
          <h1 className="text-center black-t mb-4 py-4">
            {text.rent}
            <span className="col-primary">{car.name}</span>
          </h1>
          <CarInfo
            car={car}
            lang={lang}
            adress={adress}
            byAdressLoaded={byAdressLoaded}
            onOpen={this.onOpen}
          />
        </Container>
      </div>
    );
  }
}

CarPage.propTypes = {
  getCarByAdress: PropTypes.func.isRequired,
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
  { getCarByAdress }
)(CarPage);
