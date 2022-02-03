import { Container, Button } from "../LoginPage/style";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage(){
    return (
        <Container>
          <img src={logo} alt="MyWallet" />
          <form>
            <input
              type="text"
              placeholder="Nome"
              name="name"
            />
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
            <input
              type="password"
              placeholder="Confirme a Senha"
              name="confirm-password"
            />
            <Button> Cadastrar
            </Button>
          </form>
          <Link to="/">Já tem uma conta? Faça login!</Link>
        </Container>
      );
    }