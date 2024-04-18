import { useEffect, useState} from 'react';
import { addCommaToNum } from '../utils/convert';
import {Container, Input, SelectBox, option} from '../styles/Input_style';

const CURRENCY = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

function InputBox({ num, setNum, setResult, setCurr, getRateInfo }) {
    const addNumber = e => {
        const { value } = e.target;
        setNumber(addCommaToNum(value)); // 값을 입력하면 3자리씩 콤마로 구분
    }

    // Dropdow에서 currency type을 선택하면 바뀜. 
    const changeCurrencyType = e => {
        const { value } = e.target;
        if (value !== CURRENCY[0]) setResult(CURRENCY[0])
        else setResult(CURRENCY[1]);
        setCurr(value); 
        getRateInfo();
    }

    return (
    <Container>
        <Input
            type = "text"
            onChange= {addNumber}
            value= {num}
        />
        <SelectBox onChange={changeCurrencyType}>
            {CURRENCY.map(item => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </SelectBox>
    </Container>
    );
}

export default InputBox;