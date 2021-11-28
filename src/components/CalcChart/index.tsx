import React from 'react';
import styled from 'styled-components';
import {ContainerContentStyled} from 'components/ContainerContentStyled'
import {Bar} from 'react-chartjs-2';
import {useAppSelector} from 'store';


export const CalcChartStyled = styled(ContainerContentStyled)`
  align-self: start;
  position: relative;
  height: 200px;

  & canvas {
    position: absolute !important;
  }

  @media (min-width: 360px) {
    height: 230px;
  }
  @media (min-width: 420px) {
    height: 270px;
  }

  @media (min-width: 480px) {
    height: 310px;
  }

  @media (min-width: 550px) {
    height: 350px;
  }
  @media (min-width: 640px) {
    height: 380px;

  }
  @media (min-width: 768px) {
    height: 480px;
  }
  @media (min-width: 900px) {
    height: 520px;
  }
  @media (min-width: 1024px) {
    height: 600px;
  }
  @media (min-width: 1200px) {
    height: 680px;
  }
`;

export const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'right' as const,
        },
        title: {
            display: false,
        },
    },
};


export default function CalcChart() {
    const state = useAppSelector((state) => state.calc)
    if (!state.chartIsDisplayed) return null
    return (
        <CalcChartStyled>
            <Bar type="bar" data={state.chartData} options={options}/>
        </CalcChartStyled>
    );
}


