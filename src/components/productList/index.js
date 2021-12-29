import ProductCard from "../productCard";

const ProductList = (props) => {
  return (
    <>
      {props.products.map((e, i) => (
        <ProductCard postUnTagContent={props.postUnTagContent} taggedDataList={props?.taggedDataList} key={i} {...e} {...props} />
      ))}
    </>
  );
};

export default ProductList;
