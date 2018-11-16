import axios from "axios";
import {
  GET_CARS,
  GET_CAR_BY_ADRESS,
  CARS_LOADING,
  BY_ADRESS_LOADING
} from "./types";

export const getCars = () => dispatch => {
  dispatch(setCarsLoading());
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_CARS,
      payload: res.data
    })
  );
};

export const getCarByAdress = adress => dispatch => {
  dispatch(setCarsByAdressLoading());
  axios.get("/api/items/byAdress/" + adress).then(res =>
    dispatch({
      type: GET_CAR_BY_ADRESS,
      payload: res.data
    })
  );
};

export const setCarsLoading = () => {
  return {
    type: CARS_LOADING
  };
};

export const setCarsByAdressLoading = () => {
  return {
    type: BY_ADRESS_LOADING
  };
};
