import React, { Component } from "react";

import "./MainPage.css";

import Jumbo from "./Jumbo";
import Guide from "./Guide";
import Adv from "./Adv";

import { connect } from "react-redux";
import { setLang } from "../../modules/actions/langActions";
import PropTypes from "prop-types";

class MainPage extends Component {
  state = {};
  render() {
    let { lang } = this.props.lang;
    return (
      <div>
        <Jumbo lang={lang} />
        <Adv lang={lang} />

        <Guide lang={lang} />
      </div>
    );
  }
}

MainPage.propTypes = {
  setLang: PropTypes.func.isRequired,
  lang: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  lang: state.lang
});

export default connect(
  mapStateToProps,
  { setLang }
)(MainPage);
