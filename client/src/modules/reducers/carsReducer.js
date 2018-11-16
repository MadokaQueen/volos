import {
  GET_CARS,
  GET_CAR_BY_ADRESS,
  CARS_LOADING,
  BY_ADRESS_LOADING
} from "../actions/types";

const initialState = {
  cars: [],
  carByAdress: false,
  loaded: false,
  byAdressLoaded: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
        loaded: true
      };
    case GET_CAR_BY_ADRESS:
      return {
        ...state,
        carByAdress: action.payload,
        byAdressLoaded: true
      };
    case CARS_LOADING:
      return {
        ...state,
        loaded: false
      };
    case BY_ADRESS_LOADING:
      return {
        ...state,
        byAdressLoaded: false
      };
    default:
      return state;
  }
}
