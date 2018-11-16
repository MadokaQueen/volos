import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import { Table } from "reactstrap";

const CarCard = props => {
  let { info } = props;

  if (info === undefined) return <div />;

  let imgSrc = require("../../../img/cars/" + info.adress + ".jpg");

  let { lang } = props;

  let text;
  if (lang === "ru") {
    text = {
      rub: "руб.",
      days: {
        oneThree: "1-3 дня",
        fourNine: "4-9 дней",
        tenPlus: "10 и более"
      },
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
      moreInfo: "Подробнее"
    };
  } else {
    text = {
      rub: "rub.",
      days: {
        oneThree: "1-3 days",
        fourNine: "4-9 days",
        tenPlus: "10 or more"
      },
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
      moreInfo: "More info"
    };
  }

  let stats =
    (info.typeOfFuel === "Gasoline"
      ? text.typeOfFuel.gasoline
      : text.typeOfFuel.diesel) +
    " | " +
    (info.transmission === "Manual"
      ? text.transmission.manual
      : text.transmission.automatic);

  return (
    <div className="car-card mb-4">
      <div className="car-card-top">
        <p className="h4 text-center black-t">
          <span className={info.name.length >= 20 ? "small black-t" : ""}>
            {info.name}
          </span>
        </p>
        <p className="small text-center">{stats}</p>
        <img src={imgSrc} alt="" className="car-img" />

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
            <span className="small">{info.capacityL + " " + text.liters}</span>
          </div>
          <div className="car-icon">
            <FontAwesomeIcon
              icon="gas-pump"
              fixedWidth
              size="2x"
              className="pb-2"
            />
            <span className="small">
              {info.fuelCapacityL + " " + text.lPerKm}
            </span>
          </div>
        </div>
      </div>
      <div className="car-card-bottom bg-primary">
        <Table bordered>
          <tbody>
            <tr>
              <td>{text.days.oneThree}</td>
              <td>{info.prices.oneThree + " " + text.rub}</td>
            </tr>
            <tr>
              <td>{text.days.fourNine}</td>
              <td>{info.prices.fourNine + " " + text.rub}</td>
            </tr>
            <tr>
              <td>{text.days.tenPlus}</td>
              <td>{info.prices.tenPlus + " " + text.rub}</td>
            </tr>
          </tbody>
        </Table>

        <Link
          to={"/info/" + info.adress}
          className="btn btn-primary btn-block border border-light"
        >
          <FontAwesomeIcon icon="list-alt" fixedWidth size="lg" />
          <span className="pl-2">{text.moreInfo}</span>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
