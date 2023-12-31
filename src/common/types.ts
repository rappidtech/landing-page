export interface ContainerProps {
    border?: boolean;
    children: React.ReactNode;
}

export interface ButtonProps {
    borderColor?: string;
    tcolor?: string;
    border?: string;
    color?: string;
    fixedWidth?: boolean;
    name?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export interface SvgIconProps {
    src: string;
    width: string;
    height: string;
}

export interface InputProps {
    name: string;
    placeholder: string;
    t: any;
    type?: string;
    value?: string;
    onChange: (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => void;
}

export interface validateProps {
    name: string;
    message: string;
    email: string;
}

export interface EnvolvingProps {
    color?: string;
    children: React.ReactNode;
}

