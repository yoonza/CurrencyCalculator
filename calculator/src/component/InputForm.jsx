import React from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setAmount, setSelected } from "../reducer/slice";

const InputForm = () => {
    const currencies = useSelector((state) => state.exchangeRate.currencies);
    const amount = useSelector((state) => state.exchangeRate.amount);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        let value = e.target.value;
        // 콤마를 제거하고 입력값이 숫자이고 10자리까지만 허용
        value = value.replace(/,/g, '');
        if (/^\d{0,100}$/.test(value)) {
            dispatch(setAmount(value));
        }
    }

    const handleCurrencyChange = (e) => {
        const selected = e.target.value;
        dispatch(setSelected(selected)); 
    }

    // 콤마를 추가하여 보여주는 함수
    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <InputContainer>
            <input value={formatNumberWithCommas(amount)} onChange={handleInputChange} />
            <select onChange={handleCurrencyChange}>
                {currencies.map((ele, idx) => <option key={idx} value={ele}>{ele}</option>)}
            </select>
        </InputContainer>
    );
}

const InputContainer = styled.div`
    background-color: #dddddd;
    border: 1px solid #ddd;
    width: 300px;
    display: flex;
    flex-direction: row;
    padding: 1em;
    align-items: center; /* 수직 가운데 정렬 */

    input {
        width: 70%;
        padding: .3em;
        border:none;
        margin-right: 10px; /* Input과 select 요소 사이의 간격 조절 */
    }

    select {
        width: 20%;
        border:none;
    }
`;



export default InputForm;
