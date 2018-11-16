import { SET_LANG } from "./types";
import Cookie from "js-cookie";

export const setLang = newLang => {
  Cookie.set("lang", newLang);

  return {
    type: SET_LANG,
    payload: newLang
  };
};
