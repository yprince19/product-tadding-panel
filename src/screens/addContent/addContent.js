import DropdownComp from "../../components/dropdown";
import Header from "../../components/header";
import * as S from "./style";
import { FilePicker } from "react-file-picker";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BRANDS } from "../selectBrand/queries";
import { toast } from "react-toastify";

export default function AddContentComponent(props) {
  const [contentFormat, setContentFormat] = useState(null);

  const { loading, data, error } = useQuery(GET_BRANDS);

  useEffect(() => {
    if (props.contentFilters == null) {
      props.getContentFilters();
    }
  }, []);

  useEffect(() => {
    if (props.brandsList.length == 0) {
      let temp = data?.brands?.edges?.map((e) => ({
        value: e.node.id,
        label: e.node.brandName,
      }));
      temp && props.setBrandsList([...temp]);
    }
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

  const uploadContent = async (fileObj) => {
    let data = {
      fileObj: fileObj,
      brandId: props.activeBrand.value
    }
    let resp = await props.contentUpload(data);
    if (resp.success) {
      toast('Content uploaded successfully!')
    } else {
      toast('Something went wrong!')
    }
  }

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Flex>
          <DropdownComp
            width="48%"
            placeholder="Select Brand"
            options={props?.brandsList !== null ? props?.brandsList : []}
            onChange={onChange}
            value={props?.activeBrand}
          />
          <DropdownComp
            width="48%"
            placeholder="Content Format"
            options={
              props?.contentFilters !== null
                ? props?.contentFilters?.content_format
                : []
            }
            onChange={(e) => setContentFormat(e)}
            value={contentFormat}
          />
        </S.Flex>
        {props.activeBrand && contentFormat ? (
          <FilePicker
            extensions={["mp4", "jpg", "png", "jpeg"]}
            onChange={(FileObject) => uploadContent(FileObject)}
            onError={(errMsg) => {
              console.log(errMsg);
            }}
          >
            <S.BrowseFile>
              <h2>Browse your file here...</h2>
              <p>Supports: all files</p>
            </S.BrowseFile>
          </FilePicker>
        ) : (
          <S.BrowseFile>
            <h2>Browse your file here...</h2>
            <p>Supports: all files</p>
            <p><b>Please select Brand and Content Format!</b></p>
          </S.BrowseFile>
        )}
      </S.Wrapper>
    </>
  );
}
