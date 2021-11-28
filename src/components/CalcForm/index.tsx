import React from 'react';
import {useForm, SubmitHandler, useFieldArray, FormProvider} from 'react-hook-form';
import styled from 'styled-components';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useTranslation} from 'react-i18next'
import {
    RANGE_NUMBER_OF_COMMITTEES,
    RANGE_NUMBER_OF_HEIGHT_OF_THRESHOLD,
    RANGE_NUMBER_OF_MANDATES,
    INPUT,
} from 'data/calc.form.setting.constants';
import {ContainerContentStyled} from 'components/ContainerContentStyled'
import FieldRange from 'components/FIeldRange';
import FieldCheckbox from 'components/FieldCheckbox'
import FieldMain from 'components/FieldMain';
import Button from 'components/Button'
import {CalcFormDataI} from 'models/calc.form.data.interface';
import {defaultValues} from 'data/calc.form.default.values.constants';
import {setNumberOfCommitteesFields} from 'helpers/setNumberOfCommitteesFields';
import {setError} from 'helpers/setError';
import {calcDivisionMandates} from 'helpers/calcDivisionMandates'
import {useAppDispatch, useAppSelector, setChart, showForm} from 'store'


const CalcFormStyled = styled(ContainerContentStyled)`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  & div.form--fields-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;


  }

  & div.form--field-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 12px 0;
  }

  & div.form--submit-container {
    margin-top: 25px;
    margin-bottom: 10px;
  }
`;

const schema = yup.object().shape({
    committees: yup.array().of(yup.object().shape({
        name: yup.string().required(),
        value: yup.number().positive().required(),
    }))
}).required();

export default function CalcForm() {
    const state = useAppSelector((state) => state.calc)
    const {t} = useTranslation();
    const dispatch = useAppDispatch()
    const methods = useForm<CalcFormDataI>({
        defaultValues: defaultValues,
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<CalcFormDataI> = data => {
        dispatch(setChart({...calcDivisionMandates(data)}))
    }


    const {fields} = useFieldArray({
        control: methods.control,
        name: 'committees',
    });
    const committees = methods.watch('committees')
    const disableRangeHeightOfThreshold = !(methods.watch('threshold'))
    const errors = methods.formState.errors.committees

    function handleChangeNumberOfCommittees(numberOfCommitteesToSet: string) {
        methods.setValue('committees', setNumberOfCommitteesFields(numberOfCommitteesToSet, committees))
    }

    return (
        <CalcFormStyled>
            {state.formIsDisplayed ?
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <div className={'form--fields-container'}>
                            <FieldRange
                                name={INPUT.numberOfCommittees}
                                text={t('calc.form.label.numberOfCommittees')}
                                min={RANGE_NUMBER_OF_COMMITTEES.min}
                                max={RANGE_NUMBER_OF_COMMITTEES.max}
                                onChange={handleChangeNumberOfCommittees}
                            />
                            <FieldRange
                                name={INPUT.numberOfMandates}
                                text={t('calc.form.label.numberOfMandates')}
                                min={RANGE_NUMBER_OF_MANDATES.min}
                                max={RANGE_NUMBER_OF_MANDATES.max}
                            />
                            <FieldRange
                                name={INPUT.heightOfThreshold}
                                text={t('calc.form.label.heightOfThreshold')}
                                min={RANGE_NUMBER_OF_HEIGHT_OF_THRESHOLD.min}
                                max={RANGE_NUMBER_OF_HEIGHT_OF_THRESHOLD.max}
                                disabled={disableRangeHeightOfThreshold}
                            />
                            <FieldCheckbox
                                text={t('calc.form.label.threshold')}
                                name={INPUT.threshold}
                            />
                        </div>
                        <div className={'form--fields-container'}>
                            {fields.map((field) => {
                                return (
                                    <div className={'form--field-container'} key={field.id}>
                                        <FieldMain text={t('calc.form.placeholder.committees')}
                                                   name={`${INPUT.committees}.${field.id}.name`} type={"text"}
                                                   options={{
                                                       required: true,
                                                   }}
                                                   error={setError(errors?.[field.id], "name", t('calc.form.errors.text'))}
                                        />
                                        <FieldMain text={t('calc.form.placeholder.votes')}
                                                   name={`${INPUT.committees}.${field.id}.value`}
                                                   options={{
                                                       required: true,
                                                       valueAsNumber: true,
                                                   }}
                                                   error={setError(errors?.[field.id], "value", t('calc.form.errors.number'))}
                                                   type={"number"}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={'form--submit-container'}>
                            <Button type={"submit"}>{t('calc.form.submit')}
                            </Button>
                        </div>
                    </form>
                </FormProvider>
                : <Button onClick={() => dispatch(showForm())}>{t('calc.form.button')}</Button>}
        </CalcFormStyled>

    );
}
