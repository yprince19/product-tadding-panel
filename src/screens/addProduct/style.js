import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px 15px 0 15px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export const BrowseFile = styled.div`
  background: rgba(248, 250, 252, 0.24);
  border: 3px solid rgba(95, 97, 99, 0.44);
  box-sizing: border-box;
  border-radius: 15px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.02em;
  h2 {
    font-size: 1.1rem;
    color: #000000;
    margin: 0;
  }
  p {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
  }
`;
// backgroud-image: ${({ bgImg }) => `url(${bgImg})`};
