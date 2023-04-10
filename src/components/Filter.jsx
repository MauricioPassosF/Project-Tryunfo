import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filterByName, filterByRare, onInputChange } = this.props;
    return (
      <div className="filter">
        <span>Filtros de Busca</span>
        <label htmlFor="filterByName">
          <input
            type="text"
            data-testid="name-filter"
            placeholder="Nome da carta"
            name="filterByName"
            id="filterByName"
            value={ filterByName }
            onChange={ onInputChange }
            // onChange={ onFilterInputChange }
          />
        </label>
        <label htmlFor="filterByRare">
          <select
            type="select"
            data-testid="rare-filter"
            placeholder="Raridade"
            name="filterByRare"
            id="filterByRare"
            value={ filterByRare }
            onChange={ onInputChange }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
      </div>
    );
  }
}
Filter.propTypes = {
  filterByName: PropTypes.string.isRequired,
  filterByRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  // onFilterInputChange: PropTypes.func.isRequired,
};

export default Filter;
