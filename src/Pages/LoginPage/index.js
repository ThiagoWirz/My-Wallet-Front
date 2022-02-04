import logo from "../../assets/img/logo.png";
import { Container, Button } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  return (
    <Container>
      <img src={logo} alt="MyWallet" />
      <form>
        <input onChange={handleInputChange} value={formData.email} type="email" placeholder="Email" name="email" />
        <input onChange={handleInputChange} value={formData.password} type="password" placeholder="Senha" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}
