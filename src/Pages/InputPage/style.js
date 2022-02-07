import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

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

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
    gap: 5px;
  }
  input {
    width: 98%;
    height: 45px;
    margin-bottom: 6px;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    text-indent: 11px;
    font-size: 20px;
    line-height: 25px;
    ::placeholder {
      color: #999999;
    }
  }
`;

const Button = styled.button`
  width: 98%;
  height: 45px;
  border: hidden;
  background: #a328d6;
  border-radius: 5px;
  font-size: 21px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 25px;
`;

const BackButton = styled.button`
  width: 100px;
  border: none;
  color: black;
  background-color: orange;
`;

export { Container, Button, BackButton };
