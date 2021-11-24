import React from 'react';
import {useForm, SubmitHandler, useFieldArray, FormProvider} from 'react-hook-form';
import {defaultValues} from 'data/data.calc.form.constants';
import {setNumberOfCommitteesFields} from 'helpers/setNumberOfCommitteesFields';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next'
import {
    RANGE_NUMBER_OF_COMMITTEES,
    RANGE_NUMBER_OF_HEIGHT_OF_THRESHOLD,
    RANGE_NUMBER_OF_MANDATES,
    INPUT,
} from 'data/setting.calc.form.constants';
import {ContainerContentStyled} from 'components/ContainerContentStyled'
import FieldRange from 'components/FIeldRange';
import FieldCheckbox from 'components/FieldCheckbox'
import FieldMain from 'components/FieldMain';
import Button from 'components/Button'
import {DataCalcI} from 'models/data.calc.interface';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {setError} from 'helpers/setError';

export const FormStyled = styled(ContainerContentStyled)`
  & div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  & button {
    margin-top:20px;
  }
`;


export const FieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 13px 0;
`;


const schema = yup.object().shape({
    committees: yup.array().of(yup.object().shape({
        name: yup.string().required(),
        value: yup.number().positive().required(),
    }))
}).required();

export default function Calc() {
    const {t} = useTranslation();

    const methods = useForm<DataCalcI>({
        defaultValues: defaultValues,
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<DataCalcI> = data => console.log(data);
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
        <FormStyled>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div>
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
                    <div>
                        {fields.map((field) => {
                            return (
                                <FieldContainer key={field.id}>
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
                                </FieldContainer>
                            )
                        })}
                    </div>
                    <Button type={"submit"}>{t('calc.form.submit')}</Button>
                </form>
            </FormProvider>
        </FormStyled>

    );
}


