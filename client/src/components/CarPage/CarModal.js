import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import React, { Component } from "react";

import { connect } from "react-redux";
import { setCity } from "../../modules/actions/cityActions";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cityPoints from "../../modules/cityPoints";

import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

class CarModal extends Component {
  state = {
    totalPrice: 0,

    dateOfReceivingIsSet: true,
    returnDateIsSet: true,
    dateOfReceivingIsCorrect: true,
    returnDateIsCorrect: true,
    getCityPointIsSet: true,
    outCityPointIsSet: true
  };

  DateDiff = function(start, end) {
    return (end - start) / (1000 * 60 * 60 * 24);
  };

  calcPrice = (diff, seat) => {
    let { prices } = this.props.car;

    let price;
    if (diff <= 3) price = diff * prices.oneThree;
    else if (diff <= 9) price = diff * prices.fourNine;
    else price = diff * prices.tenPlus;

    if (seat) price += 200;

    //console.log({ diff, price, prices, seat });

    return price;
  };

  validate = () => {
    let dateOfReceiving = document.getElementById("dateOfReceiving").value;
    let returnDate = document.getElementById("returnDate").value;

    let getCityPoint = document.getElementById("getCityPoint").value;
    let outCityPoint = document.getElementById("outCityPoint").value;

    let childSit = document.getElementById("childSit").checked;

    // console.log({
    //   dateOfReceiving,
    //   returnDate,
    //   getCityPoint,
    //   outCityPoint,
    //   childSit
    // });

    let dateOfReceivingIsSet = dateOfReceiving !== "";
    let returnDateIsSet = returnDate !== "";

    let dateOfReceivingIsCorrect =
      this.DateDiff(Date.parse(dateOfReceiving), Date.now()) < 0;
    let returnDateIsCorrect =
      this.DateDiff(Date.parse(dateOfReceiving), Date.parse(returnDate)) > 0;

    let getCityPointIsSet = getCityPoint !== "-";
    let outCityPointIsSet = outCityPoint !== "-";

    let price = this.calcPrice(
      this.DateDiff(Date.parse(dateOfReceiving), Date.parse(returnDate)),
      childSit
    );
    console.log(price);

    this.setState({
      dateOfReceivingIsSet,
      returnDateIsSet,
      dateOfReceivingIsCorrect,
      returnDateIsCorrect,
      getCityPointIsSet,
      outCityPointIsSet
    });
  };

  render() {
    let { lang } = this.props;
    let { city } = this.props.city;

    let points = cityPoints.filter(point => point.cityEn == city.en);
    if (points.length > 1) console.log(points);
    let point = points[0];
    //console.log(point);

    let text;
    if (lang === "ru") {
      text = {
        checkout: "Оформление заказа",

        dateOfReceiving: "Дата получения",
        returnDate: "Дата возврата",

        receivingPoint: "Пункт получения",
        returnPoint: "Пункт возврата",

        childSit: "С детским креслом (стоимость 200 руб.)",

        order: "Заказать",

        dateOfReceivingHint: "Минимум на день позже даты заказа",
        returnDateHint: "Минимальная срок аренды - 1 день"
      };
    } else {
      text = {
        checkout: "Checkout",
        dateOfReceiving: "Date of receiving",
        returnDate: "Return date",

        receivingPoint: "Receiving point",
        returnPoint: "Return point",

        childSit: "With a child seat (cost 200 rub.)",

        order: "Order",

        dateOfReceivingHint: "At least one day later than the order date",
        returnDateHint: "Minimum rental period is 1 day"
      };
    }

    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          toggle={() => this.props.toggle()}
          className={this.props.className}
        >
          <ModalHeader toggle={() => this.props.toggle()}>
            {lang === "ru" ? "Оформление заказа" : "Checkout"}
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="dateOfReceiving">{text.dateOfReceiving}</Label>
                <Input
                  type="date"
                  name="dateOfReceiving"
                  id="dateOfReceiving"
                  placeholder="DD/MM/YYYY"
                  invalid={
                    !(
                      this.state.dateOfReceivingIsSet &&
                      this.state.dateOfReceivingIsCorrect
                    )
                  }
                />
                <FormText>{text.dateOfReceivingHint}</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="returnDate">{text.returnDate}</Label>
                <Input
                  type="date"
                  name="date"
                  id="returnDate"
                  placeholder="DD/MM/YYYY"
                  invalid={
                    !(
                      this.state.returnDateIsSet &&
                      this.state.returnDateIsCorrect
                    )
                  }
                />
                <FormText>{text.returnDateHint}</FormText>
              </FormGroup>

              <FormGroup>
                <Label for="getCityPoint">{text.receivingPoint}</Label>
                <Input
                  type="select"
                  name="getCityPoint"
                  id="getCityPoint"
                  invalid={!this.state.getCityPointIsSet}
                >
                  {point !== undefined && (
                    <React.Fragment>
                      <option>-</option>
                      {point.points.map(p => (
                        <option key={p.en}>{p[lang]}</option>
                      ))}
                    </React.Fragment>
                  )}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="outCityPoint">{text.returnPoint}</Label>
                <Input
                  type="select"
                  name="outCityPoint"
                  id="outCityPoint"
                  invalid={!this.state.outCityPointIsSet}
                >
                  {point !== undefined && (
                    <React.Fragment>
                      <option>-</option>
                      {point.points.map(p => (
                        <option key={p.en}>{p[lang]}</option>
                      ))}
                    </React.Fragment>
                  )}
                </Input>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="childSit" id="childSit" />{" "}
                  {text.childSit}
                </Label>
              </FormGroup>
            </Form>

            <Button
              color="danger"
              className="mt-4"
              block
              onClick={() => this.validate()}
            >
              <FontAwesomeIcon icon="car" fixedWidth size="lg" />
              <span className="pl-2">{text.order}</span>
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

CarModal.propTypes = {
  setCity: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(
  mapStateToProps,
  { setCity }
)(CarModal);
