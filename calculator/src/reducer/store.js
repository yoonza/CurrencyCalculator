// store.js
import { configureStore } from '@reduxjs/toolkit';
import exchangeRateReducer from './slice'; // slice를 직접 임포트

// store 함수 정의
const store = configureStore({
    reducer: {
        exchangeRate: exchangeRateReducer, // slice의 이름으로 reducer를 등록
    },
});

export default store;
