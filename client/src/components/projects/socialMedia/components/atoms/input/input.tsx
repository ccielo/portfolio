import styled from 'styled-components';

export interface InputProps {
  placeholderStyle?: boolean;
  onChange?: () => void;
}

const Input = styled.input`
  height: 36px;
  width: 100%;
  box-sizing: border-box;
	border: none;
	outline: none;
	font-size: 16px;

	::placeholder {
    font-size: '15px';
    color: gray;
  }

  :focus {
    background-color: blueviolet;
    color: #535353;
  }
`;

export default Input;