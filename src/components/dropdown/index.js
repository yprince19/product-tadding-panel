import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import * as S from "./style";

const DropdownComp = (props) => {
  const options = [...props.options];
  return (
    <S.Div style={{ width: props?.width ? props.width : "auto" }}>
      <Dropdown
        controlClassName="myControlClassName"
        placeholderClassName='myPlaceholderClassName'
        options={options}
        value={props?.value ? props.value : props?.default ? options[0] : null}
        onChange={props.onChange}
        placeholder={props?.placeholder ? props.placeholder : "--select--"}
      />
    </S.Div>
  );
};

export default DropdownComp;
