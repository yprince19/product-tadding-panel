import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  width: 100%;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;

  input {
    font-size: 0.95rem;
    background: #ffffff;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px;
  }
  input:focus {
    outline: none;
  }
  label {
    font-size: 0.9rem;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 5px;
  }
`;
