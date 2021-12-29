import { useEffect } from "react";
import ProductList from "../../../../components/productList";
import SearchInput from "../../../../components/search";
import * as S from "./style";

const TagProducts = (props) => {
  useEffect(async () => {
    if (props.modalData.type == "PRODUCT") {
      await props?.parentProps?.getProducts();
    }
  }, []);

  return (
    <S.Wrapper>
      <SearchInput />
      <S.ScrollY>
        <ProductList
          postUnTagContent={props.postUnTagContent}
          taggedDataList={props?.taggedDataList}
          products={
            props?.parentProps?.tagProducts?.data?.products
              ? [...props?.parentProps?.tagProducts?.data?.products]
              : []
          }
          {...props}
        />
      </S.ScrollY>
    </S.Wrapper>
  );
};

export default TagProducts;
