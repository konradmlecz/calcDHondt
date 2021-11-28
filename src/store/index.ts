import {configureStore, PayloadAction, createSlice} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {initialState} from 'data/calc.iniatial.state.constants'
import {CalcChartDataI} from 'models/calc.chart.data.interface';


const calcSlice = createSlice({
    name: 'chartData',
    initialState,
    reducers: {
        setChart(state, action: PayloadAction<CalcChartDataI>) {
            state.chartData = action.payload;
            state.chartIsDisplayed = true;
            state.formIsDisplayed = false;
        },
        showForm(state) {
            state.formIsDisplayed = true;
        }
    },
});

export const store = configureStore({
    reducer: {
        calc: calcSlice.reducer,
    },
});

export const {setChart, showForm} = calcSlice.actions

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;