// PasswordInput.js
import React, { useState } from 'react';
import EyeIcon from '../../assets/svg/show.svg';
import EyeSlashIcon from '../../assets/svg/hide.svg'; 
import {
    InputContainer,
    Input,
    Icon,
} from './styles';

interface PasswordInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const PasswordInput : React.FC<PasswordInputProps> = ({value, onChange,}) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <InputContainer style={{ display: 'flex', alignItems: 'center' }}>
            <Input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Contraseña"
                value={value}
                onChange={onChange}
            />
            <Icon 
                src={isPasswordVisible ? EyeIcon : EyeSlashIcon}
                onClick={togglePasswordVisibility}
                alt="Toggle Password Visibility"
            />
        </InputContainer>
    );
}

export default PasswordInput;
