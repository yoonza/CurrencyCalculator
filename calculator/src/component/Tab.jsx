import React from "react";
import { useSelector } from 'react-redux';
import { requestAPI } from '../network/request';
import styled from 'styled-components';

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CenteredContainer = styled.div`
    margin-top: 10px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 30vh; /* 화면 전체 높이의 80%를 차지 */
    // width: 50%; /* 화면 전체 너비의 80%를 차지 */
    // border-radius: 10px; /* 테두리 모서리를 둥글게 만듭니다. */
    // margin: auto;
`;

const TabMenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #707070;
    border: 1px solid #ddd;
    padding: 10px;
    width: 315px;
    
    border-bottom: 1px solid #ccc;

    div {
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 5px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #ddd;
        }
    }
`;

const TabOutputContainer = styled.div`
    margin-top: 20px;

    p {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: red;
    }

    div {
        margin-top: 10px;
        font-size: 14px;
        align-items: center;
    }
`;


const makeTabs = (currencies, selected) => {
    const result = currencies.filter((currency) => { 
        return currency !== selected // selected를 제외한 나머지 currency 출력

    })
    return result;
};

const TabMenu = () => {
    const currencies = useSelector((state) => state.exchangeRate.currencies);
    const amount = useSelector((state) => state.exchangeRate.amount);
    const selected = useSelector((state) => state.exchangeRate.selected);
    const [currencyTo, setCurrencyTo] = React.useState(0);
    const [tabs, setTabs] = React.useState(makeTabs(currencies, selected));
    const [money, setMoney] = React.useState({
        date:"",
        amount: "",
    });

    const setExchange = async () => {
        if (amount <= 0) {
            setMoney({
                date: "",
                amount: 0,
            });
        }
        else {
            // API 요청하여 response 데이터 불러오기
            const response = await requestAPI(
                amount, selected, tabs[currencyTo],
            );

            const date = new Date(response.data.date);
            const formattedDate = `${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate()}`;

            // 소수점 둘째 자리까지 반올림하여 표시
            const formattedAmount = parseFloat(response.data.result).toFixed(2);

            setMoney({
                date: formattedDate,
                amount: formattedAmount,
            });
        }
    }

    React.useEffect(() => {
        setExchange();
    }, [selected, amount, currencyTo]);

    React.useEffect(() => {
        const newTabs = makeTabs(currencies, selected);
        setTabs(newTabs);
    }, [selected]); 

    return (
        <CenteredContainer>
            <div>
                <TabMenuBar>           
                    {tabs.map((currency, idx) => (
                        <div
                            key={idx}
                            onClick={() => setCurrencyTo(idx)}
                        >
                            {currency}
                        </div>
                    ))}
                </TabMenuBar>
                <TabOutputContainer>
                    <p>{tabs[currencyTo]} {money.amount}</p>
                    <div> 
                        { money.date === "" ? '' : <p>기준일: {money.date}</p> }
                    </div>
                </TabOutputContainer>
            </div>
        </CenteredContainer>
    );
};

export default TabMenu;
