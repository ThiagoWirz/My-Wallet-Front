import { Container, RegisterBox, ButtonBox, Balance } from "./style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/userContext";
import Credit from "../../components/Credit";
import { getCredits } from "../../services/mywallet";
import { Link, useNavigate } from "react-router-dom";

export default function AccountPage() {
  const { user, setUser } = useContext(UserContext);
  const [credits, setCredits] = useState([]);
  const [finalBalance, setFinalBalance] = useState(0);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  const navigate = useNavigate();

  useEffect(() => {
    renderCredits();
  }, []);

  useEffect(calcBalance, [credits]);

  function renderCredits() {
    const promise = getCredits(config);
    promise.then((response) => {
      setCredits(response.data);
    });
  }

  function calcBalance() {
    const positive = credits.filter((c) => c.type === "input");
    const negative = credits.filter((c) => c.type === "output");
    let totalPositive = 0;
    let totalNegative = 0;

    for (let i = 0; i < positive.length; i++) {
      totalPositive += parseFloat(positive[i].value);
    }
    for (let i = 0; i < negative.length; i++) {
      totalNegative += parseFloat(negative[i].value);
    }

    setFinalBalance((totalPositive - totalNegative).toFixed(2));
  }

  function handleLogOut() {
    if (window.confirm("Gostaria de sair deste usuário?")) {
      localStorage.setItem("last-user", null);
      setUser(null);
      navigate("/");
    }
  }

  return (
    <Container>
      <header>
        Olá {user.name}!{" "}
        <ion-icon onClick={handleLogOut} name="log-out-outline" />
      </header>
      <RegisterBox>
        {credits.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          credits.map((c, i) => <Credit credit={c} key={i} />)
        )}
        <Balance>
          Saldo{" "}
          <span className={finalBalance >= 0 ? "green" : "red"}>
            {finalBalance}
          </span>{" "}
        </Balance>
      </RegisterBox>
      <ButtonBox>
        <Link to="/input">
          <button>
            <ion-icon name="add-circle-outline"></ion-icon> Nova Entrada
          </button>
        </Link>
        <Link to="/output">
          <button>
            <ion-icon name="remove-circle-outline"></ion-icon> Nova Saída
          </button>
        </Link>
      </ButtonBox>
    </Container>
  );
}
