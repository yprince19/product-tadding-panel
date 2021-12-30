import { useEffect } from "react";
import ProductList from "../../../../components/productList";
import SearchInput from "../../../../components/search";
import * as S from "./style";

const TagProducts = (props) => {
  useEffect(async () => {
    console.log(props, 'propsss')
    if (props.modalData.type == "PRODUCT") {
      await props?.parentProps?.getProducts({ type: "PRODUCT", endCursor: props?.parentProps?.tagProducts?.data?.pageInfo.endCursor });
    } else {
      await props?.parentProps?.getProducts({ type: "COLLECTION", endCursor: props?.parentProps?.tagCollection?.data?.pageInfo.endCursor });
    }
  }, [props.modalData]);

  return (
    <S.Wrapper>
      <SearchInput />
      <S.ScrollY>
        {props.modalData.type == "PRODUCT" ? (
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
        ) : (
          <ProductList
            postUnTagContent={props.postUnTagContent}
            taggedDataList={props?.taggedDataList}
            tagCollection={props?.parentProps?.tagCollection}
            tagProducts={props?.parentProps?.tagProducts}
            getProducts={props?.parentProps?.getProducts}
            type={props.modalData.type}
            products={
              props?.parentProps?.tagCollection?.data?.collections
                ? [...props?.parentProps?.tagCollection?.data?.collections]
                : []
            }
            {...props}
          />
        )}
      </S.ScrollY>
    </S.Wrapper>
  );
};

export default TagProducts;
