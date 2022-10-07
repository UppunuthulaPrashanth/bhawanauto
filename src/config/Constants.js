export const API_URL = "http://localhost:8000/api/v1";
export const ASSETS = "http://localhost:8000/storage/image/";


export const PROFILE = `${ASSETS}/profile/`;


export const HTTP_STATUS = Object.freeze({
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
});

export const authConstants = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAILURE: "LOGOUT_FAILURE",
};