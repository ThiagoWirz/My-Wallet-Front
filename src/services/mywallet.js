import axios from "axios";

const BASE_URL = "https://my-wallet-project-13.herokuapp.com";

function signUp(formData) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, formData);
  return promise;
}

function logIn(formData) {
  const promise = axios.post(`${BASE_URL}/auth/login`, formData);
  return promise;
}

function postCredit(formData, config) {
  const promise = axios.post(`${BASE_URL}/credits`, formData, config);
  return promise;
}

function getCredits(config) {
  const promise = axios.get(`${BASE_URL}/credits`, config);
  return promise;
}

export { signUp, logIn, postCredit, getCredits };
