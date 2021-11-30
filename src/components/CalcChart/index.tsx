import React, {useRef} from 'react'
import styled from 'styled-components';
import {ContainerContentStyled} from 'components/ContainerContentStyled'
import {Bar} from 'react-chartjs-2';
import {useAppSelector} from 'store';
import {useSize} from 'helpers/useSize'
import {setHeight} from "helpers/setHeight";


interface CalcChartStyledI {
    readonly height: string;
}


const CalcChartStyled = styled(ContainerContentStyled)<CalcChartStyledI>`
  align-self: start;

  div.chart--container {
    height: ${props => props.height};
    position: relative;

    & canvas {
      position: absolute !important;
    }
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
    const div = useRef<HTMLDivElement>(null)
    const size = useSize(div)
    const height = setHeight(size)

    return (
        <CalcChartStyled height={height}>
            <div className="chart--container" ref={div}>
                <Bar type="bar" data={state.chartData} options={options}/>
            </div>
        </CalcChartStyled>
    );
}

