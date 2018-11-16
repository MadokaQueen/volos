import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import { Container, Row } from "reactstrap";
const Guide = ({ lang }) => {
  let text = {};
  if (lang === "ru") {
    text = {
      h1: "Простой порядок действий",
      button: "Перейти к каталогу",
      guide: [
        "Выберите автомобиль при помощи нашего каталога",
        "Укажите пункт получения и сдачи",
        "Укажите время получения и сдачи",
        "Заполните информацию о себе",
        "Оплатите указанную сумму"
      ]
    };
  } else {
    text = {
      h1: "Easy to follow guide",
      button: "Go to selection",
      guide: [
        "Choose a car using our catalog",
        "Specify the point of receipt and delivery",
        "Specify the time of receipt and delivery",
        "Fill out information about yourself",
        "Pay the specified amount"
      ]
    };
  }

  return (
    <div className="guide">
      <h1 className="text-center black-t mb-4 py-4">{text.h1}</h1>
      <Container className="pt-4">
        <Row className="pb-4">
          <div className="col-lg-2" />
          <div className="col a-mid">
            <FontAwesomeIcon
              className="col-danger pr-4"
              size="3x"
              fixedWidth
              icon="list-alt"
            />
            <span className="h4 m-0">{text.guide[0]}</span>
          </div>
        </Row>
        <Row className="pb-4">
          <div className="col-lg-2" />
          <div className="col a-mid">
            <FontAwesomeIcon
              className="col-danger pr-4"
              size="3x"
              fixedWidth
              icon="map-marker-alt"
            />
            <span className="h4 m-0">{text.guide[1]}</span>
          </div>
        </Row>
        <Row className="pb-4">
          <div className="col-lg-2" />
          <div className="col a-mid">
            <FontAwesomeIcon
              className="col-danger pr-4"
              size="3x"
              fixedWidth
              icon="calendar"
            />
            <span className="h4 m-0">{text.guide[2]}</span>
          </div>
        </Row>
        <Row className="pb-4">
          <div className="col-lg-2" />

          <div className="col a-mid">
            <FontAwesomeIcon
              className="col-danger pr-4"
              size="3x"
              fixedWidth
              icon="address-card"
            />
            <span className="h4 m-0">{text.guide[3]}</span>
          </div>
        </Row>
        <Row className="pb-4">
          <div className="col-lg-2" />

          <div className="col a-mid">
            <FontAwesomeIcon
              className="col-danger pr-4"
              size="3x"
              fixedWidth
              icon="credit-card"
            />
            <span className="h4 m-0">{text.guide[4]}</span>
          </div>
        </Row>
      </Container>

      <div className="adv-btn p-4">
        <Link to="/catalogue" className="btn btn-danger btn-lg">
          <FontAwesomeIcon icon="list-alt" fixedWidth size="lg" />
          <span className="pl-2">{text.button}</span>
        </Link>
      </div>
    </div>
  );
};

export default Guide;
