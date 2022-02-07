import { Container, Button } from "../LoginPage/style";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../services/mywallet";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  async function handleSignUp(e) {
    e.preventDefault();
    if (confirmPass !== formData.password) {
      alert("Senha de confirmação inválida");
      return;
    }
    setLoading(true);
    const promise = signUp(formData);
    promise.then(() => {
      setLoading(false);
      navigate("/");
    });
    promise.catch((error) => {
      alert(error.response.data.message);
      setLoading(false);
    });
  }

  return (
    <Container>
      <img src={logo} alt="MyWallet" />
      <form onSubmit={handleSignUp}>
        <input
          disabled={loading}
          onChange={handleInputChange}
          value={formData.name}
          type="text"
          placeholder="Nome"
          name="name"
        />
        <input
          disabled={loading}
          onChange={handleInputChange}
          value={formData.email}
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          disabled={loading}
          onChange={handleInputChange}
          value={formData.password}
          type="password"
          placeholder="Senha"
          name="password"
        />
        <input
          disabled={loading}
          onChange={(e) => setConfirmPass(e.target.value)}
          value={confirmPass}
          type="password"
          placeholder="Confirme a Senha"
          name="confirm-password"
        />
        <Button disabled={loading}>
          {loading ? (
            <ThreeDots color="#FFFFFF" height={13} width={51} timeout={3000} />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Container>
  );
}
