import React, { Component } from "react";

import { connect } from "react-redux";
import { setLang } from "../../modules/actions/langActions";
import PropTypes from "prop-types";

import { Container, Row } from "reactstrap";

import cityPoints from "../../modules/cityPoints";
import cityList from "../../modules/cityList";

class Locations extends Component {
  state = {};
  render() {
    let { lang } = this.props.lang;
    return (
      <div>
        <Container className="pt-4 mt-4">
          <Row>
            <h4 className="pb-2">
              {lang === "ru"
                ? "Вы можете получить и сдать автомобиль в следующих точках:"
                : "You can receive and return the car at the following points:"}
            </h4>
            {cityPoints.map(cityPoint => (
              <div key={cityPoint.cityEn} className="mb-4 w-100">
                <h4 className="col-primary pb-2">
                  {cityList.filter(city => city.en === cityPoint.cityEn)[0][
                    lang
                  ] + ": "}
                </h4>
                {cityPoint.points.map(point => (
                  <p key={point.en}>{"- " + point[lang]}</p>
                ))}
              </div>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

Locations.propTypes = {
  setLang: PropTypes.func.isRequired,
  lang: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(
  mapStateToProps,
  { setLang }
)(Locations);
