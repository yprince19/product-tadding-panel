import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #dadada;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  width: 100%;
  padding: 10px 15px;
  font-family: 'Roboto';

  input {
    font-size: 0.95rem;
    border: none;
  }
  input:focus {
    outline: none;
  }
  span {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-40%);
  }
`;
