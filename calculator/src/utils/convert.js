const addCommaToNum = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const roundNumToSecond = num => {
    const roundedNum = Math.round(num * 100) / 100; // 소수점 둘째 자리까지 반올림
    const currencyFormatted = '$' + roundedNum.toFixed(2); // 통화 형식으로 변환
    return currencyFormatted;
  };
  
export { addCommaToNum, roundNumToSecond };
  



export { convertStrToNum, addCommaToNum, roundNumToSecond };

