import axios from "axios"

const BASE_URL = "http://localhost:5000"

function signUp(formData){
    const promise = await axios.post(`${BASE_URL}/auth/sign-up`, formData)
    return promise
}

function logIn(formData){
    const promise =  axios.post(`${BASE_URL}/auth/login`, formData)
    return promise
}

function postCredit(formData, config){
    const promise = axios.post(`${BASE_URL}/credits`, formData, config)
    return promise
}

export {signUp, logIn, postCredit}