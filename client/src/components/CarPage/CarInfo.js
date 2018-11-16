import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Row, Table, Button } from "reactstrap";

import bodyTypes from "../../modules/bodyTypes";

import RentalInfo from "./RentalInfo";

const CarInfo = props => {
  let { car, byAdressLoaded, adress, lang } = props;
  if (!byAdressLoaded) return <div />;

  let imgSrc = require("../../img/cars/" + adress + ".jpg");

  //console.log({ car, byAdressLoaded, adress, lang, imgSrc });

  let text;
  if (lang === "ru") {
    text = {
      rub: "руб.",
      order: "Заказать",
      days: {
        oneThree: "1-3 дня",
        fourNine: "4-9 дней",
        tenPlus: "10 и более"
      },
      typeOfFuelLabel: "Тип топлива",
      transmissionLabel: "Трансмиссия",
      bodyTypeLabel: "Тип кузова",
      engineCapacityLabel: "Объем двигателя",
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
      hp: "л.с."
    };
  } else {
    text = {
      rub: "rub.",
      order: "Order",
      days: {
        oneThree: "1-3 days",
        fourNine: "4-9 days",
        tenPlus: "10 or more"
      },
      typeOfFuelLabel: "Type of fuel",
      transmissionLabel: "Transmission",
      bodyTypeLabel: "Body type",
      engineCapacityLabel: "Engine capacity",
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
      hp: "h.p."
    };
  }

  let bt = bodyTypes.filter(bodyType => bodyType.en == car.bodyType);
  let bodyTypeText = bt.length > 0 ? bt[0][lang] : "-";

  return (
    <div className="car-info-card">
      <Container>
        <Row className="pb-4">
          <div className="col-lg-4">
            <div className="car-info-card-left">
              <img src={imgSrc} alt="" style={{ width: "100%" }} />

              <div className="car-icons pb-1">
                <div className="car-icon">
                  <FontAwesomeIcon
                    icon="snowflake"
                    fixedWidth
                    size="2x"
                    className="pb-2"
                  />
                  <span className="small">A / C</span>
                </div>
                <div className="car-icon">
                  <FontAwesomeIcon
                    icon="suitcase"
                    fixedWidth
                    size="2x"
                    className="pb-2"
                  />
                  <span className="small">
                    {car.capacityL + " " + text.liters}
                  </span>
                </div>
                <div className="car-icon">
                  <FontAwesomeIcon
                    icon="gas-pump"
                    fixedWidth
                    size="2x"
                    className="pb-2"
                  />
                  <span className="small">
                    {car.fuelCapacityL + " " + text.lPerKm}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <p>Характеристики</p>
            <Table bordered>
              <tbody>
                <tr>
                  <td>{text.typeOfFuelLabel}</td>
                  <td>
                    {car.typeOfFuel === "Gazoline"
                      ? text.typeOfFuel.gasoline
                      : text.typeOfFuel.diesel}
                  </td>
                </tr>
                <tr>
                  <td>{text.transmissionLabel}</td>
                  <td>
                    {car.transmission === "Manual"
                      ? text.transmission.manual
                      : text.transmission.automatic}
                  </td>
                </tr>
                <tr>
                  <td>{text.bodyTypeLabel}</td>
                  <td>{bodyTypeText}</td>
                </tr>
                <tr>
                  <td>{text.engineCapacityLabel}</td>
                  <td>
                    {car.engineCapacity.l +
                      " " +
                      text.liters +
                      " " +
                      car.engineCapacity.hp +
                      " " +
                      text.hp}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-lg-4">
            <p>Цены</p>
            <Table bordered>
              <tbody>
                <tr>
                  <td>{text.days.oneThree}</td>
                  <td>{car.prices.oneThree + " " + text.rub}</td>
                </tr>
                <tr>
                  <td>{text.days.fourNine}</td>
                  <td>{car.prices.fourNine + " " + text.rub}</td>
                </tr>
                <tr>
                  <td>{text.days.tenPlus}</td>
                  <td>{car.prices.tenPlus + " " + text.rub}</td>
                </tr>
              </tbody>
            </Table>
            <Button color="danger" block onClick={() => props.onOpen()}>
              <FontAwesomeIcon icon="car" fixedWidth size="lg" />
              <span className="pl-2">{text.order}</span>
            </Button>
          </div>
        </Row>

        <Row>
          <div className="col">
            <div className="text-block">
              <RentalInfo lang={lang} />
            </div>
          </div>
        </Row>

        <Row>
          <div className="col">
            <div className="text-block">
              {car.description[lang].split("</br>").map((str, i) => (
                <p key={i}>{str}</p>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default CarInfo;
