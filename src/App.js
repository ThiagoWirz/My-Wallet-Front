
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import SignUpPage from "./Pages/SignUpPage";
import AccountPage from "./Pages/AccountPage";
import InputPage from "./Pages/InputPage";
import OutputPage from "./Pages/OutputPage"
import UserContext from "./contexts/userContext";

export default function App(){
    const [user, setUser] = useState({})
    return (
        <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
        <Routes>
            <Route path = "/" element={<LoginPage/>}/>
            <Route path = "/sign-up" element={<SignUpPage/>}/>
            <Route path = "/account" element={<AccountPage/>}/>
            <Route path = "/input" element={<InputPage/>}/>
            <Route path = "/output" element={<OutputPage/>}/>
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}