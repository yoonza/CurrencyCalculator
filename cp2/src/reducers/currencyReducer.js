import { FETCH_EXCHANGE_RATES_SUCCESS, FETCH_EXCHANGE_RATES_FAILURE } from '../actions/currencyActions';

const initialState = {
  exchangeRates: {
    rates: {},
    date: "",
  },
};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EXCHANGE_RATES_SUCCESS:
        const { date, rates } = action.payload;
        return {
          ...state,
          exchangeRates: {
            date,
            rates,
          },
          error: null
        };
      case FETCH_EXCHANGE_RATES_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
};

export default currencyReducer;
