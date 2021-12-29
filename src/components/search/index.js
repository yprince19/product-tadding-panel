import { ReactSVG } from "react-svg";
import * as S from "./style";

const SearchInput = (props) => {
  return (
    <S.Div>
      <input
        placeholder={props?.placeholder ? props.placeholder : "Search here..."}
        onChange={props.onChange}
      />
      <span>
        <ReactSVG src="/assets/images/search.svg" />
      </span>
    </S.Div>
  );
};

export default SearchInput;
