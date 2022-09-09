import { useState,} from "react";
import { useDispatch, useSelector, } from "react-redux";
import { ContainerComponent, } from "../ui-kit/components/container/container.component";
import { CasesInfoComponent, } from "./components/cases-info.component";
import { HistoricalCasesInfoComponent, } from "./components/historical-cases-info/historical-cases-info.component";
import { CountrySelectorComponent, } from "./components/country-selector.component";
import {
	getCovidDataBy,
} from "./covid-statistics.store";
import {
	selectCasesData,
	selectDataIsLoading,
	selectHistoricalCases,
	selectVaccinatedData
} from "./covid-statistics.selectors";

export function CovidStatisticsPage() {
	const [country, setCountry] = useState(null);
	const dispatch = useDispatch();
	const casesData = useSelector(selectCasesData);
	const historicalCases = useSelector(selectHistoricalCases);
	const vaccinatedData = useSelector(selectVaccinatedData);
	const dataIsLoading = useSelector(selectDataIsLoading);

	const loadDataByCountry = (countryData) => {
		const countryName = countryData.value;
		dispatch(getCovidDataBy(countryName));
		setCountry(countryName)
	}

	return (
		<ContainerComponent>
			<CountrySelectorComponent onChange={loadDataByCountry} />
			<div className="cases-block">
				<h2>COVID-19 General Statistics</h2>
				<CasesInfoComponent
					dataLoading={dataIsLoading}
					cases={casesData}
					vaccinated={vaccinatedData}
					country={country}
				/>
			</div>
			<div className="new-cases-chart">
				<h2>New COVID-19 contamination cases</h2>
				<HistoricalCasesInfoComponent
					cases={historicalCases}
					dataLoading={dataIsLoading}
					country={country}
				/>
			</div>
		</ContainerComponent>
	)
}
