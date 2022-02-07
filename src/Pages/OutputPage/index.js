import { Container, Button, BackButton } from "../InputPage/style";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { postCredit } from "../../services/mywallet";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import dayjs from "dayjs";

export default function OutputPage() {
  const [formData, setFormData] = useState({
    value: "",
    description: "",
    type: "output",
    date: dayjs().format("DD/MM"),
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
      <header>
        Nova saída <BackButton onClick={() => navigate(-1)}> Voltar</BackButton>
      </header>
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
            <ThreeDots color="#FFFFFF" height={13} width={51} timeout={3000} />
          ) : (
            "Salvar Saída"
          )}
        </Button>
      </form>
    </Container>
  );
}
