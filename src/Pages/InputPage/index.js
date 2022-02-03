import { Container, Button } from "./style";

export default function InputPage(){
    return(
        <Container>
            <header>Nova Entrada</header>
          <form>
            <input
              type="number"
              placeholder="Valor"
              name="amount"
            />
            <input
              type="text"
              placeholder="Descrição"
              name="description"
            />
            <Button>Salvar Entrada
            </Button>
          </form>
        </Container>
    )
}