export type Datasets = {
    label: string
    data?: (number | undefined)[]
    backgroundColor: Array<string>
    borderColor: Array<string>
    borderWidth: number
}


export interface CalcChartDataI {
    labels?: string[]
    datasets?: Array<Datasets>
}