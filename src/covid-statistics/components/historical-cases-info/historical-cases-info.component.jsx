import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { CustomizedAxisTick, } from "./cases-custom-axis.component";

export function HistoricalCasesInfoComponent({ cases, dataLoading, country, }) {
	const chartData = cases && cases.map(caseData => ({
		name: caseData.date,
		cases: caseData.cases,
	}));

	if (dataLoading) {
		return (<span>Loading...</span>);
	}

	if (!cases && !country) {
		return (
			<div>No data found. Try to pick country from the list</div>
		)
	}

	if ((!cases && country) || (!cases.length && country)) {
		return (
			<div>No data found for {country}</div>
		)
	}

	return (
		<ResponsiveContainer width="100%" height={500}>
			<AreaChart
				width={500}
				height={400}
				data={chartData}
				margin={{
					left: 20,
					bottom: 100,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" tick={<CustomizedAxisTick />} />
				<YAxis dataKey="cases" />
				<Tooltip />
				<Area type="monotone" dataKey="cases" stroke="#0170fe" fill="#0170fe" />
			</AreaChart>
		</ResponsiveContainer>
	);
}
