import { combineReducers } from "redux";

import { PostReducer } from "./unsplash";

const rootReducer = combineReducers({
  PostReducer,
});

export default rootReducer;
