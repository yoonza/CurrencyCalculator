import { FETCH_EXCHANGE_RATES_SUCCESS, FETCH_EXCHANGE_RATES_FAILURE } from '../actions/currencyActions';
import {configureStore} from '@reduxjs/toolkit';
import {createStore, combineReducers} from 'redux';
// toolkit - slice
const initialState = {
  exchangeRates: {
    rates: {},
    date: ''
  },
  error: null
};
 // 리듀서가 state값을 return하고 있는데, state값을 사용하지 않고있음.
const currencyReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // case FETCH_EXCHANGE_RATES_SUCCESS:
    //   return {
    //     ...state,
    //     exchangeRates: action.payload,
    //     error: null
    //   };
    // case FETCH_EXCHANGE_RATES_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload
    //   };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  exchange : currencyReducer
})
// const store = configureStore({
//   reducer : rootReducer
// }
// );

const store = createStore(rootReducer);

export default store;
