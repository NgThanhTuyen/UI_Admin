import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: false,
    paramsSerializer: (params) => queryString.stringify(params),
});


export default axiosClient;
