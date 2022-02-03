import logo from "../../assets/img/logo.png"
import { Container, Button } from "./style";
import { Link, useNavigate } from "react-router-dom";
export default function LoginPage(){
    return (
        <Container>
          <img src={logo} alt="MyWallet" />
          <form>
            <input
              type="email"
              placeholder="email"
              name="email"
            />
            <input
              type="password"
              placeholder="senha"
              name="password"
            />
            <Button>Entrar
            </Button>
          </form>
          <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )
}