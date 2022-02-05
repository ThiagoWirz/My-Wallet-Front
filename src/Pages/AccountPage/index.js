import { Container, RegisterBox, ButtonBox, Balance } from "./style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/userContext";
import Credit from "../../components/Credit";
import { getCredits } from "../../services/mywallet";

export default function AccountPage() {
  const { user, setUser } = useContext(UserContext);
  const [credits, setCredits] = useState([]);
  const [finalBalance, setFinalBalance] = useState(0)
  const config = { headers: { Authorization: `Bearer ${user.token}` } };

  useEffect(() => {
    renderCredits();
  }, []);

  function renderCredits(){
    const promise = getCredits(config);
    promise.then((response) => {setCredits(response.data);
    calcBalance()})
  }

  function calcBalance(){
    const positiveValues = credits.filter(c => c.type === "input").value
    const negativeValues = credits.filter(c => c.type === "output").value
    let totalPositive = 0
    let totalNegative = 0
    for(const value of positiveValues){
      totalPositive += value
    }
    for(const value of negativeValues){
      totalNegative += value
    }
    setFinalBalance(totalPositive - totalNegative)
    
  }

  return (
    <Container>
      <header>
        Olá {user.name}! <ion-icon name="log-out-outline" />
      </header>
      <RegisterBox>
        {credits.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          credits.map((c, i) => <Credit credit={c} key={i} />)
        )}
        <Balance>Saldo <span className={finalBalance >= 0? "green" : "red"}>{finalBalance}</span>  </Balance >
      </RegisterBox>
      <ButtonBox>
        <button>
          <ion-icon name="add-circle-outline"></ion-icon> Nova Entrada
        </button>
        <button>
          <ion-icon name="remove-circle-outline"></ion-icon> Nova Saída
        </button>
      </ButtonBox>
    </Container>
  );
}
