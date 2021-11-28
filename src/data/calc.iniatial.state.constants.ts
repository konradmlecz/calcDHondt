import {CalcChartDataI} from 'models/calc.chart.data.interface';

interface CalcStateI {
    chartData: CalcChartDataI
    chartIsDisplayed: boolean,
    formIsDisplayed: boolean,
}


export const backgroundColor: Array<string> = ["red", "blue", "yellow", "green", "purple", "orange", "navy", "maroon"]
export const borderColor: Array<string> = ["red", "blue", "yellow", "green", "purple", "orange", "navy", "maroon"]
export const borderWidth: number = 0
export const label: string = ""


export const initialState: CalcStateI = {
    formIsDisplayed: true,
    chartIsDisplayed: false,
    chartData: {
        labels: [""],
        datasets: [
            {
                label: label,
                data: [0],
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: borderWidth,
            },
        ],
    }
}

