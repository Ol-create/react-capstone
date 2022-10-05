import {

  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import cryto from './CoinState/coinReducer';
import detail from './CoinState/detailReducer';


  const reducer = combineReducers({
    cryto,
    detail,
  });

const store = configureStore({
  reducer
});

export default store;
