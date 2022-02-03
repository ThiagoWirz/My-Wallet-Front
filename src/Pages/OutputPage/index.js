import { Container, Button } from "../InputPage/style";

export default function OutputPage(){
    return(
        <Container>
            <header>Nova saída</header>
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
            <Button>Salvar saída
            </Button>
          </form>
        </Container>
    )
}