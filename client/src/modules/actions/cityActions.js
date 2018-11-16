import { SET_CITY } from "./types";

import Cookie from "js-cookie";

export const setCity = newCity => {
  Cookie.set("city", newCity.en);

  return {
    type: SET_CITY,
    payload: newCity
  };
};
