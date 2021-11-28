import {FieldError} from 'react-hook-form';

type errorObj = {
    name?: FieldError | undefined; id?: FieldError | undefined; value?: FieldError | undefined;
} | undefined


export function setError(errorObj: errorObj, typeOfField: "name" | "value", message: string) {
    const typeOfFieldsWithError = errorObj ? Object.keys(errorObj) : []
    if (typeOfFieldsWithError.some(typeOfFieldWithError => typeOfFieldWithError === typeOfField)) return message
    else return null
}