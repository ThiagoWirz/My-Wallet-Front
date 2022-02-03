
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import SignUpPage from "./Pages/SignUpPage";
import AccountPage from "./Pages/AccountPage";
import InputPage from "./Pages/InputPage";

export default function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element={<LoginPage/>}/>
            <Route path = "/sign-up" element={<SignUpPage/>}/>
            <Route path = "/account" element={<AccountPage/>}/>
            <Route path = "/input" element={<InputPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}