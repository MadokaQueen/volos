import { SET_LANG } from "../actions/types";
import Cookie from "js-cookie";

let lang = Cookie.get("lang");
if (lang === undefined || lang === "") lang = "ru";

const initialState = {
  lang: lang
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LANG:
      return {
        ...state,
        lang: action.payload
      };
    default:
      return state;
  }
}
