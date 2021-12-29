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
    temp && setBrands(temp);
  }, [data]);

  const onChange = (e) => {
    props.SetBrand(e.value);
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
          />
        </S.Flex>
        <S.Flex>
          <Link
            style={{ width: "50%", marginTop: "20vh" }}
            onClick={() => !props.activeBrand && alert("Please select an Brand!")}
            to={props.activeBrand ? "/display" : "/"}
          >
            <Button style={{ width: "100%" }}>Next</Button>
          </Link>
        </S.Flex>
      </S.Wrapper>
    </>
  );
}
