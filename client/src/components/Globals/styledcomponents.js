import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #f2f2f2;
  background: transparent;
  outline: none;
  color: #fff;
  font-size: 15px;

  &::placeholder {
    font-size: 15px;
    color: #ddd;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  text-align: center;
  border: none;
  font-size: 15px;
  outline: none;
`;
