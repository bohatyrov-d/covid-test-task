const PERCENT_AMOUNT = 100;

export function parseVaccinatedPercent(vaccinated) {
	return `${Math.round((vaccinated.people_vaccinated / vaccinated.population) * PERCENT_AMOUNT)}%`
}
