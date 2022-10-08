import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { coinDetail } from '../redux/CoinState/detailReducer';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cryto = useSelector((store) => store.detail);
  useEffect(() => {
    dispatch(coinDetail(id));
  }, [id]);
  const {
    symbol, name: title, rank, priceUsd, volumeUsd24Hr, supply,
  } = cryto;
  return (
    <section>
      <NavLink to="/">
        <FontAwesomeIcon icon={faCircleLeft} size="xl" className="back" />
      </NavLink>

      <div className="detail">
        <h2>{symbol}</h2>
        <p>{title}</p>
      </div>
      <div className="title">
        Details
      </div>
      <div className="detailList">
        <div>
          <p>Rank</p>
        </div>
        <div>
          <p>
            {' #'}
            {rank}
          </p>
        </div>
        <div className="dark">
          <p>Price</p>
        </div>
        <div className="dark">
          <p>
            {' $'}
            {priceUsd}
            {' USD'}
          </p>
        </div>
        <div>
          <p>Volume 24h</p>
        </div>
        <div>
          <p>
            {' $'}
            {volumeUsd24Hr}
          </p>
        </div>
        <div className="dark">
          <p>Total Supply</p>
        </div>
        <div className="dark">
          <p>
            {' '}
            {supply}
            {' '}
            {symbol}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
