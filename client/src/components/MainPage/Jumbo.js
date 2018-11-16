import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const Jumbo = ({ lang }) => {
  let text = {};
  if (lang === "ru") {
    text = {
      h1: "Аренда автомобилей",
      p: "Выберите авто для любого путешествия.",
      button: "Перейти к каталогу"
    };
  } else {
    text = {
      h1: "Rent a car",
      p: "Choose a car for any trip.",
      button: "Go to selection"
    };
  }

  return (
    <Jumbotron fluid className="lead-1 m-0">
      <Container>
        <h1 className="display-4 text-center black-t">{text.h1}</h1>
        <p className="lead text-center pb-4">{text.p}</p>
        <p className="lead text-center pt-4">
          <Link to="/catalogue" className="btn btn-danger btn-lg">
            <FontAwesomeIcon icon="list-alt" fixedWidth size="lg" />
            <span className="pl-2">{text.button}</span>
          </Link>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;
