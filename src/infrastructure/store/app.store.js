import { configureStore, } from "@reduxjs/toolkit";
import { covidStatisticsReducer, } from "../../covid-statistics/covid-statistics.store";

export const appStore = configureStore({
	reducer: covidStatisticsReducer,
	devTools: true,
});
