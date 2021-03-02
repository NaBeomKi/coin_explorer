import axios from "axios";

const api = axios.create({ baseURL: "https://api.coinpaprika.com/v1" });

const getPrices = () => api.get("/tickers");
const getExchanges = () => api.get("/exchanges");
const getCoins = () => api.get("/coins");
const getDetail = (id) => api.get(`/coins/${id}`);
