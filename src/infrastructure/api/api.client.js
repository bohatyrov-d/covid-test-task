import axios from "axios";

const MEDIAGROUP_API = "https://covid-api.mmediagroup.fr/v1";

export const ApiClient = axios.create({
	baseURL: MEDIAGROUP_API,
	headers: {
		"Content-Type": "application/json",
	},
})
