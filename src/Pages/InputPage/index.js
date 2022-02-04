import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { postCredit } from "../../services/mywallet";
import { Container, Button } from "./style";
import Loader from "react-loader-spinner";

export default function InputPage() {
  const [formData, setFormData] = useState({
    value: "",
    description: "",
    type: "input",
  });
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  const navigate = useNavigate();

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  function handlePostCredit(e) {
    e.preventDefault();
    setLoading(true);
    const promise = postCredit(formData, config);
    promise.then(() => {
      setLoading(false);
      navigate("/account");
    });
    promise.catch((error) => {
      alert(error.response.data.message);
      setLoading(false);
    });
  }

  return (
    <Container>
      <header>Nova entrada</header>
      <form onSubmit={handlePostCredit}>
        <input
          disabled={loading}
          onChange={handleInputChange}
          value={formData.value}
          type="number"
          placeholder="Valor"
          name="value"
        />
        <input
          disabled={loading}
          onChange={handleInputChange}
          type="text"
          placeholder="Descrição"
          name="description"
        />
        <Button disabled={loading}>
          {loading ? (
            <Loader
              type="ThreeDots"
              color="#FFFFFF"
              height={13}
              width={51}
              timeout={3000}
            />
          ) : (
            "Salvar Entrada"
          )}
        </Button>
      </form>
    </Container>
  );
}
