import logo from "../../assets/img/logo.png";
import { Container, Button } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import UserContext from "../../contexts/userContext";
import { useContext } from "react";
import { logIn } from "../../services/mywallet";
export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false)
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function handleLogin(e){
    e.preventDefault()
    setLoading(true)
    const promise = logIn(formData)
    promise.then((response)=>{
      setUser(response.data)
      localStorage.setItem('Last User', JSON.stringify(response.data));
      setLoading(false)
      navigate("/account")
    })
    promise.catch((error) => {
      alert(error.response.data.message);
      setLoading(false);
    });
  }

  return (
    <Container>
      <img src={logo} alt="MyWallet" />
      <form onSubmit={handleLogin}>
        <input onChange={handleInputChange} value={formData.email} type="email" placeholder="Email" name="email" />
        <input onChange={handleInputChange} value={formData.password} type="password" placeholder="Senha" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}
