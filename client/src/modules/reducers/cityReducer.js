import { SET_CITY } from "../actions/types";
import Cookie from "js-cookie";

import cityList from "../cityList";

let cityEn = Cookie.get("city");

let cityFromTheList;

let filtered = cityList.filter(city => city.en === cityEn);
if (filtered.length === 0) {
  cityFromTheList = cityList[0];
} else {
  cityFromTheList = filtered[0];
}

const initialState = {
  city: cityFromTheList
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    default:
      return state;
  }
}
