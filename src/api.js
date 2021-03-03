import axios from "axios";

const api = axios.create({ baseURL: "https://api.coinpaprika.com/v1" });

export const getPrices = () => api.get("/tickers");
export const getExchanges = () => api.get("/exchanges");
export const getCoins = () => api.get("/coins");
export const getDetail = (id) => api.get(`/coins/${id}`);
export const getCoinMarkets = (id) => api.get(`/coins/${id}/markets`);
export const getCoinExchanges = (id) => api.get(`/coins/${id}/exchanges`);
