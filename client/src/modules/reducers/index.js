import { combineReducers } from "redux";

import carsReducer from "./carsReducer";
import langReducer from "./langReducer";
import cityReducer from "./cityReducer";

export default combineReducers({
  cars: carsReducer,
  lang: langReducer,
  city: cityReducer
});
