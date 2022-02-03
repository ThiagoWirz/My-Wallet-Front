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
              placeholder="Email"
              name="email"
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
            />
            <Button>Entrar
            </Button>
          </form>
          <Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )
}