import { UnsplashInterface } from "../../interfaces";
import * as types from "./actionTypes";

// get contact items/list (paginated data)
export const getItems = (params: UnsplashInterface) => {
  return {
    type: types.GET_ITEMS,
    params,
  };
};
export const getItemsSuccess = (payload: any) => {
  return {
    type: types.GET_ITEM_SUCCESS,
    payload,
  };
};
export const getItemsFail = (error: any) => {
  return {
    type: types.GET_ITEM_FAIL,
    payload: error,
  };
};
