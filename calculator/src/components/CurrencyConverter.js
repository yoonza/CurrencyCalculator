//currencyconverter.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExchangeRates } from '../actions/currencyActions';
import styled from 'styled-components';

const CurrencyConverter = () => {
  const dispatch = useDispatch();
  const exchangeRates = useSelector(state => state.currency.exchangeRates);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [baseDate, setBaseDate] = useState('');

  useEffect(() => {
    dispatch(fetchExchangeRates())
      .then((response) => {
        const latestDate = response.data.date;
        setBaseDate(latestDate);
      })
      .catch((error) => {
        console.error('Error fetching exchange rates:', error);
      });
  }, [dispatch]);

  
  const convertCurrency = () => {
    const exchangeRate = exchangeRates.find(rate => rate.currency === fromCurrency)?.rate;
    const convertedAmount = (parseFloat(amount.replace(/,/g, '')) * exchangeRate).toFixed(2);
    return convertedAmount;
 };
  
  const handleAmountChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    setAmount(input.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };
  
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };
  
  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvertClick = () => {
    convertCurrency();
  };

  return (
    <StyledConverterContainer>
      <StyledHeader>Currency Converter</StyledHeader>
      <div>
        <StyledInputWrapper>
          <input type="text" value={amount} onChange={handleAmountChange} />
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="KRW">KRW</option>
            <option value="HKD">HKD</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
          </select>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="KRW">KRW</option>
            <option value="HKD">HKD</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
          </select>
          <button onClick={handleConvertClick}>Convert</button>
        </StyledInputWrapper>
        <div>
          <p>기준일: {baseDate}</p>
        </div>
      </div>
      <StyledResult>Result Area</StyledResult>
    </StyledConverterContainer>
  );
};

const StyledConverterContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const StyledHeader = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input, select, button {
    margin-right: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const StyledResult = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

export default CurrencyConverter;
