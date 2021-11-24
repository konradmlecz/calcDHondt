import React from 'react';
import {useFormContext} from 'react-hook-form';
import styled from 'styled-components';


const FieldStyled = styled.label`
  font-size: 1.4rem;
  cursor: pointer;
  & input[type=checkbox] {
    cursor: pointer;
  }
  & input[type=checkbox]:after {
    content: "";
    display: block;
    width: 13px;
    height: 13px;
    background-color: #aaa;
    list-style-type: none;
  }

  & input[type=checkbox]:checked:after {
    content: "X";
    color: white;
    background-color: ${props => props.theme.color.first};
    text-align: center;
    line-height: 15px;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    & input[type=checkbox]:after {
      width: 15px;
      height: 15px;
    }
    & input[type=checkbox]:checked:after {
      line-height: 15px;
    }
  }
`;


interface FieldCheckboxI {
    name: string,
    text: string,
}


export default function FieldCheckbox({text, name}: FieldCheckboxI) {
    const {register} = useFormContext();
    return (
        <FieldStyled>
         {text}
                <input type={"checkbox"}
                       {...register(name)}
                />
        </FieldStyled>
    );
}



