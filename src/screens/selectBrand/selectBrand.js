import DropdownComp from "../../components/dropdown";
import Header from "../../components/header";
import * as S from "./style";
import Button from "../../components/button";
import { useQuery } from "@apollo/client";
import { GET_BRANDS } from "./queries";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SelectBrandComponent(props) {
  const { loading, data, error } = useQuery(GET_BRANDS);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    let temp = data?.brands?.edges?.map((e) => ({
      value: e.node.id,
      label: e.node.brandName,
    }));
    temp && setBrands([...temp]);
    temp && props.setBrandsList([...temp]);
  }, [data]);

  const onChange = (e) => {
    props.SetBrand(e);
    localStorage.setItem("activeBrandId", e.value);
    
    data?.brands?.edges.map((brand) => {
      if (brand.node.id == e.value) {
        localStorage.setItem("activeStoreId", brand?.node?.store?.id);
      }
    });
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Flex>
          <DropdownComp
            width="100%"
            placeholder="Select Brand"
            onChange={onChange}
            options={[...brands]}
            value={props.activeBrand}
          />
        </S.Flex>
        <S.Flex style={{ marginTop: "20vh" }}>
          <Link
            style={{ width: "50%", margin: "5px" }}
            onClick={() =>
              !props.activeBrand?.value && alert("Please select an Brand!")
            }
            to={props.activeBrand?.value ? "/content/home" : "/"}
          >
            <Button style={{ width: "100%" }}>Next</Button>
          </Link>
          <Link
            style={{ width: "50%", margin: "5px" }}
            onClick={() =>
              !props.activeBrand?.value && alert("Please select an Brand!")
            }
            to={props.activeBrand?.value ? "/add/content" : "/"}
          >
            <Button style={{ width: "100%" }}>Upload Content</Button>
          </Link>
        </S.Flex>
      </S.Wrapper>
    </>
  );
}
