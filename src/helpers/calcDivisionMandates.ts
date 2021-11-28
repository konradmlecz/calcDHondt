import {CalcFormDataI} from 'models/calc.form.data.interface';
import {CalcEngine} from 'services/CalcEngine'

export function calcDivisionMandates(data: CalcFormDataI) {
    const engine = new CalcEngine(data)
    engine.createData(engine.getCommittees())
    return engine.getChartData()
}