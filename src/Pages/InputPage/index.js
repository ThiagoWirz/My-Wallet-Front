import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { postCredit } from "../../services/mywallet";
import { Container, Button } from "./style";

export default function InputPage() {
  const [formData, setFormData] = useState({
    value: "",
    description: "",
    type: "input",
  });
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  const navigate = useNavigate();

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function handlePostCredit(e) {
    e.preventDefault();
    const promise = postCredit(formData, config);
    promise.then(() => useNavigate("/account"));
    promise.catch((error) => alert(error.response.data.message));
  }

  return (
    <Container>
      <header>Nova entrada</header>
      <form onSubmit={handlePostCredit}>
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
        <Button>Salvar entrada</Button>
      </form>
    </Container>
  );
}
