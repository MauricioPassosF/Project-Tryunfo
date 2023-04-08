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
    isSaveButtonDisabled: true,
    salvedCard: [],
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

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3, salvedCard } = this.state;
    salvedCard.push({
      cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
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
    });
  };

  render() {
    const { cardName,
      cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
        <main>
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
        </main>
      </>
    );
  }
}

export default App;
