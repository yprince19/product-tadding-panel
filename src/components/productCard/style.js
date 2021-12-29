import styled from "styled-components";

export const Card = styled.div`
  background: rgba(207, 207, 207, 0.2);
  margin: 10px auto;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  img {
      width: 100%;
      max-width: 65px;
      height: auto;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const ProdDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  padding-left: 10px;

  h2 {
    font-size: 0.9rem;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 0;
  }
  span {
    font-size: 0.85rem;
    line-height: 14px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
  p {
    margin: 0;
    font-size: 0.85rem;
    line-height: 14px;
    letter-spacing: -0.02em;
    color: #000000;
  }
`;

export const Button = styled.button`
  background: ${({active}) => active ? '#0E8613' : '#000000'};
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
