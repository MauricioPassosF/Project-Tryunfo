import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="card-name">
          Colocar nome da carta
          <input
            type="text"
            data-testid="name-input"
            name="card-name"
            id="card-name"
          />
        </label>
        <label htmlFor="description">
          Colocar descricao
          <input
            type="textArea"
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Colocar valor de attr1
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Colocar valor de attr2
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Colocar valor de attr3
          <input
            type="number"
            data-testid="attr3-input"
            name="attr3"
            id="attr3"
          />
        </label>
        <label htmlFor="card-image">
          Colocar link da imagem
          <input
            type="text"
            data-testid="image-input"
            name="card-image"
            id="card-image"
          />
        </label>
        <label htmlFor="card-rarity">
          Selecione a raridade da carta
          <select
            type="select"
            data-testid="rare-input"
            name="card-rarity"
            id="card-rarity"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="supertrunfo">
          Essa carta eh o super trunfo?
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="supertrunfo"
            id="supertrunfo"
          />
        </label>
        <button type="button" data-testid="save-button"> Salvar </button>
      </form>
    );
  }
}

export default Form;
