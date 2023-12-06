import { Envolving } from "./styles";
import { EnvolvingProps } from "../types";


const EnvolvingContainer = ({
    color,
    children,
}: EnvolvingProps) => (
    <Envolving color={color}>{children}</Envolving>
);


export default EnvolvingContainer;


