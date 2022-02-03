
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import "./assets/css/reset.css";
import "./assets/css/style.css";

export default function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element={<LoginPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}