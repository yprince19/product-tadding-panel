import styled from "styled-components";

export const HeadingLg = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 28px;
  color: #000000;
  margin-bottom: 0.8rem;
  margin-left: 15px;
`;

export const HeadingSm = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 21px;
  color: #000000;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  padding: 15px 0px 0 0px;

  form {
    background: rgba(229, 229, 229, 0.2);
    padding: 15px;
    margin: 15px 0;
  }
`;

export const FormField = styled.div`
  padding: 10px 0;

  textarea {
    font-size: 0.95rem;
    background: #ffffff;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px;
    font-family: "Roboto";
    width: 100%;
  }
  textarea:focus {
    outline: none;
  }
  fieldset {
    border: none;
    display: flex;
    align-items: center;
    padding: 10px 0;
    label {
      margin-left: 5px;
      font-size: 1rem;
    }
    input[type="checkbox"] {
      width: 25px;
      height: 25px;
    }
    .flex {
      display: flex;
      align-items: center;
    }
  }
  label {
    font-size: 0.9rem;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 5px;
  }
  .div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductImg = styled.div`
  position: relative;
  margin: 10px;
  width: 80px;
  height: 80px;
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  background-size: ${({ size }) => (size ? size : "cover")};
  background-position: center;
  background-repeat: no-repeat;

  span {
    position: absolute;
    top: -7px;
    right: -7px;
  }
`;

export const CategoryGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 5px;
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

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  place-items: center;
  grid-gap: 2%;
`;

export const Grid4 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-row-gap: 1rem;
`;

export const VariationWrapper = styled.div`
  width: 100%;
`;