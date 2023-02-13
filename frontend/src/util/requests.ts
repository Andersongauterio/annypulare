import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL =
	process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const requestBackend = (config: AxiosRequestConfig) => {
	const headers = config.headers;
	return axios({ ...config, baseURL: BASE_URL, headers});
};

axios.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		//
		return response;
	},
	function (error) {
		if (error.response.status === 401) {
		}
		return Promise.reject(error);
	}
);