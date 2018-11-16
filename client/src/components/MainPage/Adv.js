import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Row } from "reactstrap";
const Adv = ({ lang }) => {
  let text = {};
  if (lang === "ru") {
    text = {
      h1: "Для Вас это доступно",
      gps: {
        header: "GPS-навигатор",
        desc: "Не теряйтесь и экономьте время с помощью GPS-навигатора."
      },
      child: {
        header: "Детское кресло",
        desc: "Обезопасьте своих малышей с помощью детского кресла."
      },
      wifi: {
        header: "Wi-Fi интернет",
        desc: "Оставайтесь на связи со скоростным Wi-Fi интернетом."
      },
      support: {
        header: "Помощь в дороге",
        desc: "Дайте нам знать и наши специалисты приедут и помогут вам."
      }
    };
  } else {
    text = {
      h1: "It's available for you",
      gps: {
        header: "GPS-navigator",
        desc: "Don't get lost and save your time with a GPS-navigator."
      },
      child: {
        header: "Baby chair",
        desc: "Secure your little ones with a baby chair."
      },
      wifi: {
        header: "Wi-Fi Internet",
        desc: "Stay in touch with high-speed Wi-Fi Internet."
      },
      support: {
        header: "Travel assistance",
        desc: "Let us know and our specialists will come and help you."
      }
    };
  }

  return (
    <div className="adv-wrapper">
      <h1 className="text-center black-t mb-4 py-4">{text.h1}</h1>
      <Container>
        <Row>
          <div className="col">
            <div className="adv">
              <div className="adv-item">
                <div className="adv-icon">
                  <FontAwesomeIcon size="4x" icon="map-marker-alt" />
                </div>
                <div className="adv-body">
                  <p className="h5">{text.gps.header}</p>
                  <p>{text.gps.desc}</p>
                </div>
              </div>
              <div className="adv-item">
                <div className="adv-icon">
                  <FontAwesomeIcon icon="child" size="4x" />
                </div>
                <div className="adv-body">
                  <p className="h5">{text.child.header}</p>
                  <p>{text.child.desc}</p>
                </div>
              </div>
              <div className="adv-item">
                <div className="adv-icon">
                  <FontAwesomeIcon icon="wifi" size="4x" />
                </div>
                <div className="adv-body">
                  <p className="h5">{text.wifi.header}</p>
                  <p>{text.wifi.desc}</p>
                </div>
              </div>
              <div className="adv-item">
                <div className="adv-icon">
                  <FontAwesomeIcon icon="headphones-alt" size="4x" />
                </div>
                <div className="adv-body">
                  <p className="h5">{text.support.header}</p>
                  <p>{text.support.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Adv;
