import ProductCard from "../productCard";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductList = (props) => {
  const fetchMore = async () => {
    props.getProducts({});
    if (props.type == "PRODUCT") {
      await props?.getProducts({
        type: "PRODUCT",
        endCursor: props?.tagCollection?.data.pageInfo.endCursor,
      });
    } else {
      await props?.getProducts({
        type: "COLLECTION",
        endCursor: props?.tagCollection?.data.pageInfo.endCursor,
      });
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={props.products.length}
        next={fetchMore}
        hasMore={
          props.type == "PRODUCT"
            ? props?.tagProducts?.data?.pageInfo?.hasNextPage
            : props?.tagCollection?.data?.pageInfo?.hasNextPage
        }
      >
        {props.products.map((e, i) => (
          <ProductCard
            postUnTagContent={props.postUnTagContent}
            taggedDataList={props?.taggedDataList}
            key={i}
            {...e}
            {...props}
          />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default ProductList;
