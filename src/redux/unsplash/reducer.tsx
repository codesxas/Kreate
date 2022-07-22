import * as types from "./actionTypes";

const initialState = {
  images: {},
  loadingItems: false,
  error: {
    message: "",
  },
};

const PostReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_ITEMS:
      state = { ...state, loadingItems: true };
      break;
    case types.GET_ITEM_SUCCESS:
      state = { ...state, images: action.payload, loadingItems: false };
      break;
    case types.GET_ITEM_FAIL:
      state = {
        ...state,
        error: { message: "Error" },
        loadingItems: false,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostReducer;
