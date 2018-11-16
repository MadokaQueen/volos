import React, { Component } from "react";
import { CustomInput, Form, Button } from "reactstrap";

import vehicleClasses from "../../../modules/vehicleClasses";

class Filter extends Component {
  state = {};
  render() {
    let { lang } = this.props;
    let text;

    if (lang === "ru") {
      text = {
        vehicleClass: {
          header: "Класс авто"
        },
        typeOfFuel: {
          header: "Тип топлива",
          labels: ["Бензин", "Дизель"]
        },
        transmission: {
          header: "Трансмиссия",
          labels: ["Механника", "Автомат"]
        },
        reset: "Сбросить"
      };
    } else {
      text = {
        vehicleClass: {
          header: "Vehicle class"
        },
        typeOfFuel: {
          header: "Type of fuel",
          labels: ["Gasoline", "Diesel"]
        },
        transmission: {
          header: "Transmission",
          labels: ["Manual", "Automatic"]
        },
        reset: "Reset"
      };
    }

    let { filter } = this.props;
    return (
      <div>
        <div className="car-card mb-4">
          <div className="car-card-top">{text.vehicleClass.header}</div>
          <div className="car-card-bottom bg-primary">
            <div>
              <Form>
                {vehicleClasses.map(vehicleClass => (
                  <CustomInput
                    key={vehicleClass.en}
                    className="pb-1"
                    type="radio"
                    id={"filterVehicleClass_" + vehicleClass.en}
                    name="customRadio"
                    label={vehicleClass[lang]}
                    onClick={() =>
                      this.props.setFilter({
                        ...filter,
                        vehicleClass: vehicleClass.en
                      })
                    }
                  />
                ))}
              </Form>
            </div>
          </div>
        </div>

        <div className="car-card mb-4">
          <div className="car-card-top">{text.typeOfFuel.header}</div>
          <div className="car-card-bottom bg-primary">
            <div>
              <Form>
                <CustomInput
                  className="pb-1"
                  type="radio"
                  id="filterTypeOfFuel1"
                  name="customRadio"
                  label={text.typeOfFuel.labels[0]}
                  onClick={() =>
                    this.props.setFilter({
                      ...filter,
                      typeOfFuel: "Gasoline"
                    })
                  }
                />
                <CustomInput
                  className="pb-1"
                  type="radio"
                  id="filterTypeOfFuel2"
                  name="customRadio"
                  label={text.typeOfFuel.labels[1]}
                  onClick={() =>
                    this.props.setFilter({
                      ...filter,
                      typeOfFuel: "Diesel"
                    })
                  }
                />
              </Form>
            </div>
          </div>
        </div>

        <div className="car-card mb-4">
          <div className="car-card-top">{text.transmission.header}</div>
          <div className="car-card-bottom bg-primary">
            <div>
              <Form>
                <CustomInput
                  className="pb-1"
                  type="radio"
                  id="filterTransmission1"
                  name="customRadio"
                  label={text.transmission.labels[0]}
                  onClick={() =>
                    this.props.setFilter({
                      ...filter,
                      transmission: "Manual"
                    })
                  }
                />
                <CustomInput
                  className="pb-1"
                  type="radio"
                  id="filterTransmission2"
                  name="customRadio"
                  label={text.transmission.labels[1]}
                  onClick={() =>
                    this.props.setFilter({
                      ...filter,
                      transmission: "Automatic"
                    })
                  }
                />
              </Form>
            </div>
          </div>
        </div>
        <div className="mb-4 px-2">
          <Button
            color="danger"
            block
            onClick={() => {
              document.getElementById("filterTypeOfFuel1").checked = false;
              document.getElementById("filterTypeOfFuel2").checked = false;
              document.getElementById("filterTransmission1").checked = false;
              document.getElementById("filterTransmission2").checked = false;
              vehicleClasses.forEach(vehicleClass => {
                document.getElementById(
                  "filterVehicleClass_" + vehicleClass.en
                ).checked = false;
              });
              this.props.setFilter({
                vehicleClass: "Any",
                typeOfFuel: "Any",
                transmission: "Any"
              });
            }}
          >
            {text.reset}
          </Button>
        </div>
      </div>
    );
  }
}

export default Filter;
