import Select from "react-select";
import { countriesList, } from "../../assets/countries.list";

const SELECTOR_OPTIONS = countriesList.map(countryData => ({
	value: countryData.name,
	label: countryData.name
}))

export function CountrySelectorComponent({ onChange, }) {
	const customStyling = {
		control: (styles, { isFocused, }) => ({ ...styles, border: isFocused ? 'solid 1px #0170fe' : 'solid 1px #bfbfbf', boxShadow: "none" }),
	}

	return (
		<div className="country-selector">
			<Select
				placeholder="Pick country you want to check"
				options={SELECTOR_OPTIONS}
				styles={customStyling}
				onChange={onChange}
			/>
		</div>
	)
}
