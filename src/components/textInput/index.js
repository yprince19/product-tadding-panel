import * as S from "./style";

const TextInput = (props) => {
  return (
    <S.Div>
      <label>{props.label}</label>
      <input
        type={props?.type ? props.type : "text"}
        pattern={props?.pattern ? props.pattern : ""}
        placeholder={props?.placeholder}
        value={props.value}
        onChange={props.handleChange}
        className="form-field"
        title={props?.title ? props.title : ""}
        maxLength={props?.maxLength ? props.maxLength : ""}
        required={props?.required ? true : false}
      />
    </S.Div>
  );
};

export default TextInput;
