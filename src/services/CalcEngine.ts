import {CommitteeI, CalcFormDataI} from 'models/calc.form.data.interface';
import {backgroundColor, borderColor, borderWidth, label} from 'data/calc.iniatial.state.constants';
import {CalcChartDataI, Datasets} from 'models/calc.chart.data.interface'

type Divisors = {
    id: number,
    value: number,
}

type ObtainedMandatesForCommittee = {
    id: number,
    mandates: number,
}


export class CalcChartData {
    labels: string[]
    datasets: Array<Datasets>

    constructor(labels: string[], datasets: Array<Datasets>) {
        this.labels = labels
        this.datasets = datasets
    }
}

export class CalcEngine {
    protected numberOfCommittees: number
    protected numberOfMandates: number
    protected heightOfThreshold: number
    protected thresholdInNumberAbsolute: number
    protected threshold: boolean
    protected committees: Array<CommitteeI>
    protected sumOfVotes: number
    protected divisors: Array<Divisors>
    protected chartData: null | CalcChartDataI

    constructor({
                    numberOfCommittees,
                    numberOfMandates,
                    threshold,
                    committees,
                    heightOfThreshold,
                }: CalcFormDataI
    ) {
        this.numberOfCommittees = numberOfCommittees
        this.numberOfMandates = numberOfMandates
        this.heightOfThreshold = heightOfThreshold
        this.thresholdInNumberAbsolute = 0
        this.threshold = threshold
        this.committees = committees
        this.sumOfVotes = 0
        this.divisors = []
        this.chartData = null
        this.createSumOfVotes()
        this.createOfThresholdInNumberAbsolute()
        this.checkWhichCommitteeObtainedThreshold()
        this.sortCommittees()
        this.createDivisors()
        this.sumOfNumberOfObtainedMandates()
    }

    createSumOfVotes() {
        this.sumOfVotes = this.committees.reduce(function (acc, obj) {
            return acc + obj.value;
        }, 0)
    }

    createOfThresholdInNumberAbsolute() {
        this.thresholdInNumberAbsolute = (this.sumOfVotes / (100 / this.heightOfThreshold))
    }

    checkWhichCommitteeObtainedThreshold() {
        this.committees = this.committees.map(committee => {
            if (!(committee.value > this.thresholdInNumberAbsolute) && this.threshold) {
                return {
                    ...committee,
                    isHasThreshold: false
                }
            } else {
                return {
                    ...committee,
                    isHasThreshold: true
                }
            }
        })
    }

    sortCommittees() {
        this.committees = this.committees.sort((a, b) => b.value - a.value)
    }

    createDivisors() {
        const nestedDivisors = this.committees.map(committee => {
            const nestedDivisor = []
            for (let y = 0; y < this.numberOfMandates; y++) {
                if (committee.isHasThreshold) {
                    nestedDivisor.push({id: committee.id, value: (committee.value / (y + 1))})
                }
            }
            return nestedDivisor
        })
        const divisors = nestedDivisors.flat()
        divisors.sort((a, b) => b.value - a.value)
        this.divisors = divisors
    }

    sumOfNumberOfObtainedMandates() {
        const divisorsToSum = this.divisors.splice(0, this.numberOfMandates)
        const obtainedMandatesForCommittees: ObtainedMandatesForCommittee[] = []
        for (let i = 0; i < divisorsToSum.length; i++) {
            const mandates = divisorsToSum.filter(divisor => divisor.id === i)
            obtainedMandatesForCommittees.push({id: i, mandates: mandates.length})
        }
        this.committees.forEach(committee => {
            const {mandates} = obtainedMandatesForCommittees.find(obtainedMandatesForCommittee => obtainedMandatesForCommittee.id === committee.id) || {}
            committee.numberOfObtainedMandates = mandates
        })
    }

    createData(committees: CommitteeI[]) {
        const labels = []
        const datasets = []
        labels.push(...committees.map(committee => committee.name))
        datasets.push({
            label: label,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: borderWidth,
            data: committees.map(committee => committee.numberOfObtainedMandates),
        })
        this.chartData = new CalcChartData(labels, datasets)
    }

    getCommittees() {
        return this.committees
    }

    getChartData() {
        return this.chartData
    }
}

