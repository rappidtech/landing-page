import { StyledButton } from "./styles";
import { ButtonProps } from "../../common/types";

export const Button = ({
    borderColor,
    tcolor,
    color,
    fixedWidth,
    children,
    onClick,
}: ButtonProps) => (
    <StyledButton borderColor={borderColor} color={color} tcolor={tcolor} fixedWidth={fixedWidth} onClick={onClick}>
        {children}
    </StyledButton>
);
