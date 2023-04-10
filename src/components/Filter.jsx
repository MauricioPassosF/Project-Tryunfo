import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filterByName, onInputChange } = this.props;
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
      </div>
    );
  }
}
Filter.propTypes = {
  filterByName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  // onFilterInputChange: PropTypes.func.isRequired,
};

export default Filter;
