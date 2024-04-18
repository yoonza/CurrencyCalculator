// src/actions/currencyActions.js
import axios from 'axios';

export const FETCH_EXCHANGE_RATES_SUCCESS = 'FETCH_EXCHANGE_RATES_SUCCESS';
export const FETCH_EXCHANGE_RATES_FAILURE = 'FETCH_EXCHANGE_RATES_FAILURE';

export const fetchExchangeRates = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=USD,CAD,KRW,HKD,JPY,CNY&apikey=Bgi9CsgIsgba6hgSxBSK4BsR1Icfyyze');
      dispatch({
        type: FETCH_EXCHANGE_RATES_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_EXCHANGE_RATES_FAILURE,
        payload: error.message
      });
    }
  };
};
