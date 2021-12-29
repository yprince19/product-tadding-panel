import DropdownComp from "../../components/dropdown";
import Header from "../../components/header";
import * as S from "./style";
import { FilePicker } from "react-file-picker";

export default function AddProductComponent() {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Flex>
          <DropdownComp options={[]} />
          <DropdownComp options={[]} />
        </S.Flex>
        <FilePicker
          extensions={["pdf"]}
          onChange={(FileObject) => console.log(FileObject)}
          onError={(errMsg) => {
            console.log(errMsg);
          }}
        >
          <S.BrowseFile>
            <h2>Browse your file here...</h2>
            <p>Supports: all files</p>
          </S.BrowseFile>
        </FilePicker>
      </S.Wrapper>
    </>
  );
}
