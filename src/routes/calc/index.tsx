import React from 'react';
import styled from 'styled-components';
import CalcForm from 'components/CalcForm'
import CalcChart from 'components/CalcChart'


export const CalcStyled = styled.div`
  display: grid;
  grid-gap: 20px;
`;


export default function Calc() {

    return (
        <CalcStyled>
            <CalcForm/>
            <CalcChart/>
        </CalcStyled>

    );
}


