import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
  }
`;

const RegisterBox = styled.div`
  height: 530px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 20px 0;
  padding: 10px;
  gap: 10px;
  position: relative;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  button {
    width: 195px;
    height: 100%;
    background: #a328d6;
    border: none;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
    ion-icon{
        font-size: 30px;
    }
  }
`;

const Balance = styled.div`
width: 90%;
position: absolute;
bottom: 5px;
display: flex;
justify-content: space-between;
.red{
  color: red
}
.green{
  color: green
}
`

export { Container, RegisterBox, ButtonBox, Balance };
