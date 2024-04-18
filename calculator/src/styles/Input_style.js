import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 250px;
`;

export const Input = styled.input`
  display: block;
  padding: 5px 0px 5px 10px;
  margin-right: 5px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

export const SelectBox = styled.select``;

export const option = styled.option``;