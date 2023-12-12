import axios, { AxiosError, AxiosResponse } from "axios";
import axiosRetry from "axios-retry";
import { Constant } from "../utils/constant";
let token = localStorage.getItem("authToken");
let tenantid = localStorage.getItem("tenantid");
let OcpApimSubscriptionKey = process.env.REACT_APP_ocpApimSubscriptionKey;
const httpClient = axios.create({
  baseURL: "",
  headers: {
    "Content-type": "application/json",
    "Ocp-Apim-Subscription-Key": "",
    Authorization: "",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosRetry(httpClient, {
  retries: Constant.ApiRetryCount,
  retryDelay: (retryCount: any) => {
    return retryCount * Constant.ApiRetryBackOffInterval;
  },
  retryCondition: (error: AxiosError) => {
    return error.response !== undefined && error.response.status !== 0
      ? error.response.status === 401 || error.response.status === 502
      : error.code === AxiosError.ERR_NETWORK
      ? true
      : false;
  },
  shouldResetTimeout: true,
  onRetry: async (retryCount: any, error: any, requestConfig: any) => {
    console.log("Error:", error.message);
  },
});

httpClient.interceptors.request.use(
  async (config) => {
    config.baseURL = "";
    config.headers["Ocp-Apim-Subscription-Key"] = OcpApimSubscriptionKey;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
    config.headers["Content-Security-Policy"] = "default-src 'self'";
    config.headers["X-Frame-Options"] = "DENY";
    config.headers["Strict-Transport-Security"] =
      "max-age=31536000; includeSubDomains; preload";
    config.headers["X-Content-Type-Options"] = "nosniff";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["tenantid"] = `${tenantid}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// Response interceptor
httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);
const httpCommonClients = {
  httpClient,
};
export default httpCommonClients;
