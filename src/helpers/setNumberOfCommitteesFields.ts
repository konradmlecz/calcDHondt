import {defaultValues } from 'data/data.calc.form.constants';
import { CommitteeI } from 'models/data.calc.interface';

export const setNumberOfCommitteesFields = (numberOfCommitteesStr:string, fields:CommitteeI[]) =>{
    const newFields = [...fields]
    const numberOfCommittees = Number(numberOfCommitteesStr)
    if (Number(numberOfCommittees) > newFields.length) {
        for (let i = newFields.length; i < Number(numberOfCommittees); i++) {
            const committeeToAdd = defaultValues.committees.find(committee => committee.id === i)
            committeeToAdd ? newFields.push({...committeeToAdd}):newFields.push({id: i, value: 0, name:""})
        }
    }
    else if (numberOfCommittees < newFields.length) {
        newFields.splice(numberOfCommittees, newFields.length - numberOfCommittees);
    }
    return newFields;
}