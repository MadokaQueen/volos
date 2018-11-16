import React, { Component } from "react";

import { Container, Row } from "reactstrap";

import CarCard from "./CarCard";

class Cars extends Component {
  state = {
    needUpdate: true
  };
  getDecks(deckSize) {
    let { cars } = this.props;
    let decks = [[]];

    let ln = cars.length;
    if (ln % deckSize !== 0) ln += deckSize - (ln % deckSize);

    for (let i = 0, u = 0; i < ln; i++) {
      if (decks[u].length >= deckSize) {
        u++;
        decks[u] = [];
      }
      decks[u].push(cars[i]);
    }
    return decks;
  }
  render() {
    let decks = this.getDecks(2);

    let { lang } = this.props;
    return (
      <div id="CarsBlock">
        {decks.map((deck, i) => (
          <div className="col-deck" key={i}>
            {deck.map((car, i) => (
              <div key={i} className="col-lg">
                <CarCard info={car} lang={lang} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Cars;
