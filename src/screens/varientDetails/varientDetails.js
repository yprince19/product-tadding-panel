import { Button } from "../../components/button/style";
import Header from "../../components/header";
import * as S from "./style";

export default function VarientDetailsComponent() {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Table>
          <tr>
            <th>Variants</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Red , S</td>
            <td>
              <input placeholder="Enter Here" />
            </td>
            <td>
              <input placeholder="Enter Here" />
            </td>
          </tr>
        </S.Table>
        <S.Flex>
            <Button style={{width: "50%"}}>Confirm</Button>
        </S.Flex>
      </S.Wrapper>
    </>
  );
}
