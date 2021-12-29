import styled from "styled-components";

export const ContentCard = styled.div`
  margin: 20px 0;
`;

export const Container = styled.div`
  padding: 15px 10px;
  background-color: #e5e5e5;
`;
// backgroud-image: ${({ bgImg }) => `url(${bgImg})`};

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

export const ProductImage = styled.div`
  height: auto;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  width: fit-content;
  margin: auto;
  img, video {
    max-width: 100%;
  }
`;

export const Cross = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  background: rgba(0, 0, 0, 0.47);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexScroll = styled.div`
  overflow-x: scroll;
  display: flex;
  width: 100%;
  padding: 5px 0;
`;

export const ButtonAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  margin: 2px;
  background: #ffffff;
  border: 2px solid rgba(207, 207, 207, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  white-space: nowrap;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    align-items: flex-end;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const CategoryGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  span {
    margin-left: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.02em;
    color: #3b5998;
    white-space: nowrap;
  }
`;

export const ContentWrapper = styled.div`
  background: #f8fafc;
  border-radius: 10px;
  padding: 10px;
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.02em;
    span {
      font-weight: 400;
      margin-left: 15px;
    }
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ProductOverviewWrap = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  ul {
    list-style: none;
    padding: 0;
    li {
      display: flex;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 0.85rem;
      line-height: 14px;
      display: flex;
      align-items: flex-end;
      letter-spacing: -0.02em;
      color: #ffffff;
      padding: 7px 0;

      span {
        margin-left: 7px;
      }
    }
  }
`;
