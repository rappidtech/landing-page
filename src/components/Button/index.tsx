import { StyledButton } from "./styles";
import { ButtonProps } from "../../common/types";

export const Button = ({
    color,
    fixedWidth,
    children,
    onClick,
}: ButtonProps) => (
    <StyledButton color={color} fixedWidth={fixedWidth} onClick={onClick}>
        {children}
    </StyledButton>
);
