import { useState } from "react/cjs/react.development";
import { Container, Button } from "./style";

export default function InputPage(){
  const [formData, setFormData] = useState({value: "", description: "", type: "input"})


  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
    console.log(formData)
  }

    return(
        <Container>
            <header>Nova entrada</header>
          <form>
            <input
              onChange={handleInputChange}
              value={formData.value}
              type="number"
              placeholder="Valor"
              name="value"
            />
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Descrição"
              name="description"
            />
            <Button>Salvar entrada
            </Button>
          </form>
        </Container>
    )
}