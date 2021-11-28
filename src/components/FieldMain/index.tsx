import React from 'react';
import {useFormContext} from 'react-hook-form';
import styled from 'styled-components';


export const FieldStyled = styled.div`
  width: 160px;
  height: 50px;
  margin: 5px;
  position: relative;

  & input {
    color: ${props => props.theme.color.first};
    display: block;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    width: 160px;
    text-align: center;
    background-color: transparent;
    border-radius: 0;
    border-bottom: 2px dotted ${props => props.theme.color.first};
    padding: 10px 15px;

    &:focus {
      border-bottom: 2px solid ${props => props.theme.color.second};
      color: ${props => props.theme.color.second};
    }

    &:focus::placeholder {
      color: transparent;
    }
  }

  & p.error {
    color: red;
    width: 100%;
    position: absolute;
    top: 40px;
    margin: 0;
    font-size: 1rem;
  }

  @media (min-width: 700px) {
    margin: 0px 10px;
    & input {
      //width: 200px;
      font-size: 1.6rem;
    }

    & p.error {
      top: 50px;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1050px) {
    margin: 0px 20px;
  }
`;

interface FieldMainI {
    name: string,
    text: string,
    type: "number" | "text",
    options: {
        valueAsNumber?: boolean,
        required: boolean,
    }
    error?: null | string
}


export default function FieldMain({text, name, type, options, error}: FieldMainI) {
    const {register} = useFormContext();
    return (
        <FieldStyled>
            <input type={type}
                   {...register(name, options)}
                   placeholder={text}
            />
            {error && <p className={'error'}>{error}</p>}
        </FieldStyled>
    );
}



