export interface CommitteeI {
    id:number;
    name:string,
    value: number,
}

export interface DataCalcI {
    numberOfCommittees : number,
    numberOfMandates : number,
    heightOfThreshold : number,
    threshold : boolean,
    committees : Array<CommitteeI>,
}





