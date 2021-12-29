import * as S from "./style";

const Button = props => {
    return (
        <S.Button {...props}>{props.children}</S.Button>
    )
}

export default Button;