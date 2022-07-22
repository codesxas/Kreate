import axios from "axios";
import { config_url } from "./constants";

//apply base url for axios
const REACT_APP_URL = config_url;
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const axiosApi = axios.create({
  baseURL: REACT_APP_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url: string, config: any) {
  return await axiosApi
    .get(url, {
      ...config,
      headers: {
        Authorization: "Client-ID " + ACCESS_KEY,
      },
    })
    .then((response) => response.data);
}
