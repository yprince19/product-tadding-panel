import * as S from "./style";

const ProductCard = (props) => {
  const tagProduct = async () => {
    if (props?.modalData.type === "PRODUCT") {
      // mapping all variants of a product
      let temp = {
        id: props?.modalData.id,
        product_id: props?.id,
        content_type: props?.modalData.activeContentType,
      };
      let products = props?.variants.map((e) => ({
        ...temp,
        sku_id: e.id,
      }));
      console.log(products);
      let data = {
        products: [...products],
        tagType: "PRODUCT",
        dataToAdd: {
          content_type: props?.modalData.activeContentType,
          id: props?.id,
          name: props?.name,
          slug: props?.slug,
        },
        taggedDataList: props?.taggedDataList,
      };
      const res = await props?.parentProps?.postTagContent(data);
    } else {
      let data = {
        products: {
          id: props?.modalData.id,
          collection_id: props?.id,
          content_type: props?.modalData.activeContentType,
        },
        tagType: "COLLECTION",
        dataToAdd: {
          content_type: props?.modalData.activeContentType,
          id: props?.id,
          name: props?.name,
          slug: props?.slug,
        },
        taggedDataList: props?.taggedDataList,
      };
      const res = await props?.parentProps?.postTagContent(data);
    }
  };

  const untagCollection = (data) => {
    props?.postUnTagContent({
      ...data,
      taggedDataList: props?.taggedDataList,
    });
  };

  const untagProduct = () => {
    // mapping all variants of a product
    let temp = {
      content_id: props?.modalData?.id,
      product_id: props?.id,
    };
    let products = props?.variants.map((e) => ({
      ...temp,
      sku_id: e.id,
    }));

    let data = {
      products: [...products],
      untagType: "PRODUCT",
    };

    props?.postUnTagContent({
      ...data,
      taggedDataList: props?.taggedDataList,
    });
  };

  const ids = props?.taggedDataList[`${props?.modalData.id}`]
    ? props?.taggedDataList[`${props?.modalData.id}`][
        props?.modalData.type
      ].map((e) => e.id)
    : [];
  const istagged = ids.includes(props?.id);

  return (
    <S.Card>
      {props?.modalData.type == "PRODUCT" ? (
        <S.Flex>
          <img src={props?.thumbnail.url} alt="img" />
          <S.ProdDetails>
            <h2>{props?.name}</h2>
            <span>https//www.urbanic.tshirt//</span>
            <p>Rs. {props?.price}</p>
          </S.ProdDetails>
        </S.Flex>
      ) : (
        <S.Flex>
          <img src={props?.image_url} alt="img" />
          <S.ProdDetails>
            <h2>{props?.name}</h2>
            <span>https//www.urbanic.tshirt//</span>
          </S.ProdDetails>
        </S.Flex>
      )}
      <S.Button
        active={istagged ? true : false}
        onClick={
          !istagged
            ? tagProduct
            : () => {
                props?.modalData.type == "PRODUCT"
                  ? untagProduct()
                  : untagCollection({
                      products: {
                        content_id: props?.modalData?.id,
                        collection_id: props?.id,
                      },
                      untagType: "COLLECTION",
                    });
              }
        }
      >
        {istagged ? "Tagged" : "Tag"}
      </S.Button>
    </S.Card>
  );
};

export default ProductCard;
