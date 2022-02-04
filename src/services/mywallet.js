import axios from "axios"

const BASE_URL = "http://localhost:5000"

async function signUp(formData){
    const promise = await axios.post(`${BASE_URL}/auth/sign-up`, formData)
    return promise
}

export {signUp}