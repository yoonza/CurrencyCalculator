import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: '',
    selected: "USD",
    currencies: [
        "USD",
        "CAD",
        "KRW",
        "HKD",
        "JPY",
        "CNY", // selected 값과 같지 않은 것을 filter
    ],
    rate: 'null', // 추가된 속성
    date: '2024-04-20', // 추가된 속성
    currencyFrom: null, // 추가된 속성
    currencyTo: null, // 추가된 속성
};

const exchangeRateSlice = createSlice({
    name: 'exchangeRate',
    initialState,
    reducers: {
        // 환율
        addRate(state, action) {
            state.rate = action.payload;
        },
        // 날짜 
        addDate(state, action) {
            state.date = action.payload;
        },
        setBaseCurrency(state, action) {
            state.currencyFrom = action.payload;
        },
        setSymbolCurrency(state, action) {
            state.currencyTo = action.payload;
        },
        setAmount(state, action) {
            state.amount = action.payload;
        },
        setSelected(state, action) {
            state.selected = action.payload;
        },
    },
});

export const { addDate, addRate, setBaseCurrency, setSymbolCurrency, setAmount, setSelected, changeTab } = exchangeRateSlice.actions;

export default exchangeRateSlice.reducer;
