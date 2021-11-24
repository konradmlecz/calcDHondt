import React, {ReactEventHandler} from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 4px;
  font-family: ${props => props.theme.fontFamily.first};
  background-color: transparent;
  border-radius: 10px;
  padding: 5px 10px;
  color: ${props => props.theme.color.first};
  border: 2px solid ${props => props.theme.color.first};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.color.second};
    border: 2px solid ${props => props.theme.color.second};
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    margin: 10px;
    padding: 5px 10px;

  }
`;

interface ButtonI {
    children: string,
    onClick?: ReactEventHandler,
    type?: 'submit',
}

export default function Button({children, onClick, type}: ButtonI) {

    return (
        <ButtonStyled onClick={onClick} type={type}>
            {children}
        </ButtonStyled>
    );
}






