import logo from "../../assets/img/logo.png";
import { Container, Button } from "./style";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
import { logIn } from "../../services/mywallet";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  useEffect(() => {
    if (user !== null) {
      navigate("/account");
    }
  });

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    const promise = logIn(formData);
    promise.then((response) => {
      setUser(response.data);
      localStorage.setItem("last-user", JSON.stringify(response.data));
      setLoading(false);
      navigate("/account");
    });
    promise.catch((error) => {
      alert(error.response.data.message);
      setLoading(false);
    });
  }

  return (
    <Container>
      <img src={logo} alt="MyWallet" />
      <form onSubmit={handleLogin}>
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
        <Button disabled={loading}>
          {loading ? (
            <ThreeDots color="#FFFFFF" height={13} width={51} timeout={3000} />
          ) : (
            "Entrar"
          )}
        </Button>
      </form>
      <Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}
