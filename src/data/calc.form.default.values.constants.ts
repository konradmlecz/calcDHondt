import {CalcFormDataI} from 'models/calc.form.data.interface';

export const defaultValues: CalcFormDataI = {
    numberOfCommittees: 7,
    numberOfMandates: 14,
    heightOfThreshold: 5,
    threshold: true,
    committees: [
        {
            id: 0,
            value: 256847,
            name: 'PIS',
        },
        {
            id: 1,
            value: 197930,
            name: 'PO',
        },
        {
            id: 2,
            value: 84457,
            name: 'Lewica',
        },
        {
            id: 3,
            value: 51855,
            name: 'Konfederacja',
        },
        {
            id: 4,
            value: 47219,
            name: 'PSL',
        },
        {
            id: 5,
            value: 9214,
            name: 'BIS',
        },
        {
            id: 6,
            value: 1765,
            name: 'Prawica',
        },
    ]
}

