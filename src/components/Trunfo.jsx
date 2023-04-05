import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends Component {
  render() {
    const {
      trunfoBool,
    } = this.props;

    if (trunfoBool) {
      return (
        <span data-testid="trunfo-card">Super Trunfo</span>
      );
    }
  }
}

SuperTrunfo.propTypes = {
  trunfoBool: PropTypes.bool.isRequired,
};

export default SuperTrunfo;
