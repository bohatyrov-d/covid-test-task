import { parseVaccinatedPercent, } from "../../infrastructure/helpers/vaccinated-percent.helper";

export function CasesInfoComponent({ cases, vaccinated, dataLoading, country, }) {
	if (!cases) {
		return (
			<div>No data found. Try to pick country from the list</div>
		)
	}

	const vaccinatedPercent = vaccinated
		? `${parseVaccinatedPercent(vaccinated)}%`
		: "No Data";

	if (dataLoading) {
		return (<span>Loading...</span>);
	}

	if (!cases && !country) {
		return (
			<div>No data found. Try to pick country from the list</div>
		)
	}

	if (!cases && country) {
		return (
			<div>No data found for {country}</div>
		)
	}

	return (
		<>
			<div>Confirmed cases: { cases.confirmed }</div>
			<div>Patients recovered: { cases.recovered }</div>
			<div>Deaths: { cases.deaths }</div>
			<div>Population vaccinated: { vaccinatedPercent }</div>
		</>
	)
}
