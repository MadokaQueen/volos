import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import React, { Component } from "react";

import cityList from "../../modules/cityList";

import { connect } from "react-redux";
import { setCity } from "../../modules/actions/cityActions";
import PropTypes from "prop-types";

class CityModal extends Component {
  state = {};
  render() {
    let { lang } = this.props;
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          toggle={() => this.props.toggle()}
          className={this.props.className}
        >
          <ModalHeader toggle={() => this.props.toggle()}>
            {lang === "ru" ? "Выбор города" : "City selection"}
          </ModalHeader>
          <ModalBody>
            {cityList.map(city => (
              <Button
                key={city.en}
                color="primary"
                block
                onClick={() => {
                  this.props.toggle();
                  this.props.setCity(city);
                }}
              >
                {lang === "ru" ? city.ru : city.en}
              </Button>
            ))}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

CityModal.propTypes = {
  setCity: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(
  mapStateToProps,
  { setCity }
)(CityModal);
