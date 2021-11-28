import {defaultValues} from 'data/calc.form.default.values.constants';
import {CommitteeI} from 'models/calc.form.data.interface';

export const setNumberOfCommitteesFields = (numberOfCommitteesStr: string, fields: CommitteeI[]) => {
    const newFields = [...fields]
    const numberOfCommittees = Number(numberOfCommitteesStr)
    if (Number(numberOfCommittees) > newFields.length) {
        for (let i = newFields.length; i < Number(numberOfCommittees); i++) {
            const committeeToAdd = defaultValues.committees.find(committee => committee.id === i)
            committeeToAdd ? newFields.push({...committeeToAdd}) : newFields.push({id: i, value: 0, name: ""})
        }
    } else if (numberOfCommittees < newFields.length) {
        newFields.splice(numberOfCommittees, newFields.length - numberOfCommittees);
    }
    return newFields;
}