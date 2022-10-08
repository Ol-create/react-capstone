import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Coin = ({ id, symbol, price }) => (
  <NavLink className="card" to={`/detail/${id}`}>
    <h2>{symbol}</h2>
    <small>{id}</small>
    <p>
      $
      {price}
    </p>
  </NavLink>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Coin;
