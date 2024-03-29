import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SuperTrunfo from './Trunfo';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{cardName}</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <div>
          <span>attr1</span>
          <span data-testid="attr1-card">{cardAttr1}</span>
        </div>
        <div>
          <span>attr2</span>
          <span data-testid="attr2-card">{cardAttr2}</span>
        </div>
        <div>
          <span>attr3</span>
          <span data-testid="attr3-card">{cardAttr3}</span>
        </div>
        <div>
          <span data-testid="rare-card">{cardRare}</span>
          <SuperTrunfo trunfoBool={ cardTrunfo } />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
