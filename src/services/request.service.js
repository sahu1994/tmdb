import axios from "axios";

import { Enviornment } from "../enviornment";

export const axiosInstance = axios.create({
    baseURL: Enviornment.tmdbAPIUrl,
})

export const axiosOwnServer = axios.create({
    baseURL: Enviornment.ownAPIUrl
});

axiosOwnServer.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');

    if(accessToken) {
        config.headers = { 'Authorization': `Bearer ${accessToken}`}
    }
    return config;
})

export default axiosInstance;