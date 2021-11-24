import React from 'react';
import {useFormContext} from 'react-hook-form';
import styled from 'styled-components';


export const FieldStyled = styled.div`
  width: 200px;
  height: 50px;
  margin: 0 10px;
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

  & p {
    color: red;
    width: 100%;
    position: absolute;
    top: 50px;
    margin: 0;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    & input {
      width: 200px;
      font-size: 1.6rem;
    }

    & p {
      font-size: 1.2rem;
    }
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
            {error && <p>{error}</p>}
        </FieldStyled>
    );
}



