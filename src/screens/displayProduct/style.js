import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px 15px 0 15px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

export const Container = styled.div`
  padding: 15px 10px;
  background-color: #e5e5e5;
  position: relative;
  padding-bottom: 30px;
  .flex-card {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
  }
`;
// backgroud-image: ${({ bgImg }) => `url(${bgImg})`};
