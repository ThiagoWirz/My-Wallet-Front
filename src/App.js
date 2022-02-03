
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import SignUpPage from "./Pages/SignUpPage";

export default function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element={<LoginPage/>}/>
            <Route path = "/sign-up" element={<SignUpPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}