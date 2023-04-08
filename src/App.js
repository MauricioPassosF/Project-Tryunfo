import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  };

  textValidation = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const array = [cardName, cardDescription, cardImage, cardRare];
    return array.some(({ length }) => length <= 0);
  };

  numberValidation = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const arrayAttr = [cardAttr1, cardAttr2, cardAttr3]
      .map((number) => Number(number));
    const sum = arrayAttr.reduce(((add, number) => add + number), 0);
    const sumLimit = 210;
    const valueLimit = 90;
    const sumLessThan210 = sum > sumLimit;
    const valueLessThan90 = arrayAttr.some((attr) => attr > valueLimit);
    const onlyPositive = arrayAttr.some((attr) => attr < 0);
    return (sumLessThan210 || valueLessThan90 || onlyPositive);
  };

  buttonSaveValidation = () => {
    this.setState({
      isSaveButtonDisabled: (this.textValidation() || this.numberValidation()),
    });
  };

  onInputChange = ({ target }) => {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.buttonSaveValidation);
  };

  trunfoValidaton = () => {
    const { savedCards } = this.state;
    const trunfo = savedCards
      .some(({ cardTrunfo }) => cardTrunfo === true);
    this.setState({ hasTrunfo: trunfo });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3, cardTrunfo, savedCards } = this.state;
    savedCards.push({
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    });
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }, this.trunfoValidaton);
  };

  render() {
    const { cardName, hasTrunfo,
      cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, savedCards } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
        <main>
          <div className="make-cards">
            <Form
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              hasTrunfo={ hasTrunfo }
            />
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
          <section className="deck-cards">
            <h1>Deck</h1>
            {savedCards.map((card, index) => (
              <Card
                key={ index }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            ))}
          </section>
        </main>
      </>
    );
  }
}

export default App;
