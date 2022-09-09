import { createSlice, } from "@reduxjs/toolkit";
import { covidStatisticsRepo, } from "./api/covid-statistics.repo";

const initialState = {
	isLoading: false,
	cases: null,
	historicalCases: null,
	vaccinesData: null,
}

export const covidStatisticsStore = createSlice({
	name: 'covidStatistics',
	initialState,
	reducers: {
		toggleDataLoaderStatus: (state, { payload }) => {
			state.isLoading = payload;
		},
		writeCasesByCountry: (state, { payload, }) => {
			if (!payload) {
				return;
			}

			state.cases = payload;
		},
		writeHistoricalCasesByCountry: (state, { payload, }) => {
			if (!payload) {
				return;
			}

			state.historicalCases = payload;
		},
		writeVaccinesDataByCountry: (state, { payload, }) => {
			if (!payload) {
				return;
			}

			state.vaccinesData = payload;
		},
	},
});

// Action creators are generated for each case reducer function
const { writeCasesByCountry, writeHistoricalCasesByCountry, writeVaccinesDataByCountry, toggleDataLoaderStatus, } = covidStatisticsStore.actions;

export function getCovidDataBy(countryName) {
	return async (dispatch) => {
		if (!countryName) {
			return;
		}
		const cases = covidStatisticsRepo.getCasesBy(countryName);
		const historicalCases = covidStatisticsRepo.getHistoricalCasesBy(countryName)
		const vaccinesData = covidStatisticsRepo.getVaccinesDataBy(countryName);

		dispatch(toggleDataLoaderStatus(true));
		const covidData = await Promise.all([
			cases,
			historicalCases,
			vaccinesData
		])
		dispatch(writeCasesByCountry(covidData[0]))
		dispatch(writeHistoricalCasesByCountry(covidData[1]))
		dispatch(writeVaccinesDataByCountry(covidData[2]))
		dispatch(toggleDataLoaderStatus(false));
	}
}

export const covidStatisticsReducer = covidStatisticsStore.reducer;
