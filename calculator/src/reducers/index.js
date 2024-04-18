// reducers/index.js
import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer'; // 실제 파일 이름에 맞게 수정해야 합니다.

const rootReducer = combineReducers({
  currency: currencyReducer
});

export default rootReducer;
