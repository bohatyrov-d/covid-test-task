import { ApiClient, } from "../../infrastructure/api/api.client";

function mapHistoryDataByDate(historyData) {
	if (!historyData || !historyData.dates) {
		return [];
	}
	const dates = historyData.dates;

	return Object.keys(dates).reverse().map(key => {
		const dateParts = key.split("-");
		const year = dateParts[0];
		const month = dateParts[1];
		const day = dateParts[2];

		return ({
			date: `${day}.${month}.${year}`,
			cases: dates[key],
		})
	});
}

export const covidStatisticsRepo = {
	getCasesBy: async (country) => {
		try {
			const response = await ApiClient.get(`/cases`, {
				params: {
					country,
				},
			});
			return response.data.All;
		} catch (err) {
			console.error(err);
		}
	},
	getHistoricalCasesBy: async (country) => {
		try {
			const response = await ApiClient.get(`/history`, {
				params: {
					country,
					status: 'confirmed',
				},
			});
			return mapHistoryDataByDate(response.data.All);
		} catch (err) {
			console.error(err);
		}
	},
	getVaccinesDataBy: async (country) => {
		try {
			const response = await ApiClient.get(`/vaccines`, {
				params: {
					country,
				},
			});
			return response.data.All;
		} catch (err) {
			console.error(err);
		}
	},
};
