import axios from 'axios';

export const FETCH_EXCHANGE_RATES_SUCCESS = 'FETCH_EXCHANGE_RATES_SUCCESS';
export const FETCH_EXCHANGE_RATES_FAILURE = 'FETCH_EXCHANGE_RATES_FAILURE';
// dispatch를 사용하지 않고 있음. 
export const fetchExchangeRates = async () => {
    try {
      const response = await axios.get('https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=USD,CAD,KRW,HKD,JPY,CNY&apikey=Bgi9CsgIsgba6hgSxBSK4BsR1Icfyyze');
      
      console.log(response.data);
      return response.data;

    } catch (error) {
      console.log(error);
    }
  };
