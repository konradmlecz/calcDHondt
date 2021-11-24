import React, {useState} from 'react';
import {useFormContext} from 'react-hook-form';
import styled from 'styled-components';


const FieldStyled = styled.label`
  font-size: 1.2rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  gap: 5px;
  margin: 20px;
  width: 120px;
  & input[type=range] {
    -webkit-appearance: none;
    background: transparent;
    width: 120px;
  }

  & input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
 
  }

  & input[type=range]:focus {
    outline: none;
  }
 

  & input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  & input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${props => props.theme.color.first};
    height: 16px;
    width: 16px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -5px;
  }

  & input[type=range]::-moz-range-thumb {
    background: ${props => props.theme.color.first};
    height: 16px;
    width: 16px;
    border-radius: 50%;
    cursor: pointer;
  }

  & input[type=range]::-ms-thumb {
    background: ${props => props.theme.color.first};
    height: 16px;
    width: 16px;
    border-radius: 50%;
    cursor: pointer;
  }

  & input[type=range]::-webkit-slider-runnable-track {
    width: 50%;
    height: 6px;
    cursor: pointer;
    border-radius: 4px;
    background: ${props => props.theme.color.first};
  }

  & input[type=range]::-moz-range-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background: ${props => props.theme.color.first};
    border-radius: 4px;
  }

  & input[type=range]::-ms-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-radius: 4px;
    color: transparent;

  }

  & input[type=range]::-ms-fill-lower {
    background: ${props => props.theme.color.first};
    border-radius: 4px;
  }

  & input[type=range]::-ms-fill-upper {
    background: ${props => props.theme.color.first};
    border-radius: 4px;
  }



  @media (min-width: 768px) {
    font-size: 1.6rem;
    width: 220px;
    & input[type=range] {
      width: 220px;
    }
    
  }
`;


interface FieldRangeI {
    name: string,
    text: string,
    min: string,
    max: string,
    disabled?: boolean,
    onChange?: (dataToSet: string) => void,
}


export default function FieldRange({text, name, min, max, disabled, onChange}: FieldRangeI) {
    const {register, getValues} = useFormContext();
    const [stateOfRange, setStateOfRange] = useState(getValues(name))
    const handleChange = (value:string): void => {
        setStateOfRange(value)
        if (typeof onChange === "function") onChange(value)
    }
    const handleDisabled = (disabled: boolean | undefined): boolean => {
        return (typeof disabled === "boolean") ? disabled : false
    }
    return (
        <FieldStyled>
            {text}: {stateOfRange}
            <input type={"range"}
                   {...register(name, {setValueAs: v => parseInt(v)})}
                   disabled={handleDisabled(disabled)}
                   min={min}
                   max={max}
                   onChange={({target:{value}}) => handleChange(value)}
            />
        </FieldStyled>
    );
}



