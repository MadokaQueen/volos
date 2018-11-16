import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./modules/registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressCard,
  faCalendar,
  faMapMarkerAlt,
  faListAlt,
  faCreditCard,
  faChevronDown,
  faHeadphonesAlt,
  faWifi,
  faChild,
  faSnowflake,
  faSuitcase,
  faGasPump,
  faFilter,
  faCar
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAddressCard,
  faCalendar,
  faMapMarkerAlt,
  faListAlt,
  faCreditCard,
  faChevronDown,
  faHeadphonesAlt,
  faWifi,
  faChild,
  faSnowflake,
  faSuitcase,
  faGasPump,
  faFilter,
  faCar
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
