import { ArrayService, Service } from "~/types/services";

const axios = require('axios').default;
const base = 'http://localhost:3000/services'

export async function getServices(): Promise<ArrayService> {
	try {
		const { data } = axios.get(`${base}`).then((r: any) => r.data)
		return [null, data]
	}
	catch (err: any) {
		return [err]
	}
}
