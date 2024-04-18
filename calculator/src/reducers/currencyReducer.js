// reducers/currencyReducer.js
const initialState = {
    exchangeRates: [],
    error: null
  };
  
  const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EXCHANGE_RATES_SUCCESS':
        return {
          ...state,
          exchangeRates: action.payload,
          error: null
        };
      case 'FETCH_EXCHANGE_RATES_FAILURE':
        return {
          ...state,
          exchangeRates: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default currencyReducer;
  