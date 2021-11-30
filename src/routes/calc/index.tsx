import React from 'react';
import styled from 'styled-components';
import CalcForm from 'components/CalcForm'
import CalcChart from 'components/CalcChart'
import {useAppSelector} from "../../store";


export const CalcStyled = styled.div`
  display: grid;
  grid-gap: 20px;
`;


export default function Calc() {
    const state = useAppSelector((state) => state.calc)
    return (
        <CalcStyled>
            <CalcForm/>
            {state.chartIsDisplayed && <CalcChart/>}
        </CalcStyled>

    );
}


