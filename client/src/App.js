import React, { Component } from "react";
import "./App.css";

import AppNavbar from "./components/AppNavbar/AppNavbar";

import MainPage from "./components/MainPage/MainPage";
import Catalogue from "./components/Catalogue/Catalogue";
import CarPage from "./components/CarPage/CarPage";

import Locations from "./components/locations/Locations";

import AppFooter from "./components/AppFooter/AppFooter";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <Switch>
          <Route exact path="/" render={props => <MainPage />} />
          <Route exact path="/catalogue" render={props => <Catalogue />} />
          <Route
            exact
            path="/info/:adress"
            render={props => <CarPage adress={props} />}
          />
          <Route exact path="/locations" render={props => <Locations />} />
        </Switch>
        <AppFooter />
      </React.Fragment>
    );
  }
}
export default App;
