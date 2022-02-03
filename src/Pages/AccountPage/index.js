import { Container, RegisterBox, ButtonBox } from "./style";
export default function AccountPage() {
  return (
    <Container>
      <header>
        Olá Fulano! <ion-icon name="log-out-outline" />
      </header>
<RegisterBox><span>Não há registros de entrada ou saída</span></RegisterBox>
<ButtonBox>
    <button><ion-icon name="add-circle-outline"></ion-icon> Nova Entrada </button>
    <button><ion-icon name="remove-circle-outline"></ion-icon> Nova Saída </button>
</ButtonBox>
    </Container>
  );
}
