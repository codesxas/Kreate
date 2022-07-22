import { get } from "./api_helper";
import * as url from "./url_helper";
import { UnsplashInterface } from "../interfaces";

// get images by pagination
export const getItems = (params: UnsplashInterface) =>
  get(url.GET_IMAGES, { params });
