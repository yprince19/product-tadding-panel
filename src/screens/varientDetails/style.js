import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5px 5px 0 5px;
  background-color: #e5e5e5;
  min-height: 100vh;
`;

export const Table = styled.table`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  table-layout: fixed;
  width: 100%;

  tr {
  }
  th {
    background-color: transparent;
    font-size: 1rem;
    line-height: 26px;
    color: #000000;
    padding: 10px 5px;
  }
  td {
    background-color: #fff;
    padding: 15px 5px;
    text-align: center;
    border: 1px solid rgba(229, 229, 229, 0.89);
    box-sizing: border-box;
    backdrop-filter: blur(6px);

    input {
      border: hidden;
      outline: none;
      width: 100%;
      text-align: center;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  margin-top: 2rem;
`;
