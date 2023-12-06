import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
    HeaderSection,
    LogoContainer,
    Burger,
    NotHidden,
    Menu,
    CustomNavLinkSmall,
    Label,
    Outline,
} from "../Header/styles";

import { 
    Body,
    Container,
    FormContainer,
    SignUp,
    SignIn,
    Form,
    SocialIcons,
    SocialAnchor,
    Anchor,
    Span,
    Input,
    Button,
    ToggleContainer,
    Toggle,
    TogglePanel,
    ToggleLeft,
    ToggleRight,
    Paragraph,
    HiddenButton,
    Title,
    ButtonAction,
    ButtonToggle,
    ButtonToggleHover,
    BodyMobile,
    DividerStyle,
    RemForget,
    Recordarme,
    BotonGoogle,
    UserInput,
    UserInputField,
    UserLabel,
    SignInButton
} from "../Registro/styles";

import styled from "styled-components";

const ButtonContinue = styled.button`
	background-color: #A84AC9;
	color: #fff;
	font-size: 12px;
	padding: 10px 45px;
	border: 1px solid transparent;
	border-radius: 8px;
	max-width: 300px;
	width: 40vw;
	margin-top: 10px;
	cursor: pointer;


`;


interface Props {

}

const Verificacion: React.FC<Props> = () => {
    return (
        <>
			<div style={ {height: '100vh'} } className="d-flex justify-content-center align-items-center flex-column" >
                    <LogoContainer to="https://rappidtech.com/links" aria-label="homepage">
                        <SvgIcon src="logo.svg" width="40px" height="60px" />
                    </LogoContainer>
                    <Title style={{marginTop:"5vh"}}>
                        Tu cuenta ha sido verificada
                    </Title>
					<Anchor href="https://rappidtech.com/links"><ButtonContinue>Inicia sesión para continuar</ButtonContinue></Anchor>
			</div>
        </>  
    );
};

export default Verificacion;