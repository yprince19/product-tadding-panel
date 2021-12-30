import styled from "styled-components";

export const Button = styled.button`
  background: ${({ color }) => (color ? color : "#000000")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.79);
  border-radius: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 30px;
  color: #ffffff;
  padding: 5px 10px;
  margin: auto;
  border: hidden;
  display: block;
  cursor: pointer;
`;
