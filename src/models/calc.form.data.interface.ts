export interface CommitteeI {
    id: number;
    name: string,
    value: number,
    isHasThreshold?: boolean,
    numberOfObtainedMandates?: number,
}

export interface CalcFormDataI {
    numberOfCommittees: number,
    numberOfMandates: number,
    heightOfThreshold: number,
    threshold: boolean,
    committees: Array<CommitteeI>,
}





