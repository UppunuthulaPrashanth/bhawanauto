export const API_URL = "https://dev3.sbagh.com/api/v1";
export const ASSETS = "https://dev3.sbagh.com/storage/images/";
export const BLOG_ASSETS = "https://dev3.sbagh.com/storage/images/blog/";


// for reCaptcha
export const SITE_KEY="6LcwB8QjAAAAAJTz681s_NuEWCgLu-pyG3zhONA3"
export const SECRET_KEY="6LcwB8QjAAAAAK-PgX-mEGc4-pNTb4RSOuErAgUm"
export const REACT_CAPTCH="https://www.google.com/recaptcha/api/siteverify?secret="

// export const API_URL = "http://localhost:8000/api/v1";
// export const ASSETS = "http://localhost:8000/storage/images/";
// export const BLOG_ASSETS = "http://localhost:8000/storage/images/blog/";

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

export const CURRENCY = "OMR"
export const TAX_PERCENTAGE=5