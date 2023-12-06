import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
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
    SignInButton,
} from "./styles";

import { Divider } from "antd";
import PasswordInput from "../PasswordInput";

import {signInWithGoogle,
    signInWithFacebook,
    signUpWithMail,
    signInWithMail,
    signOutUser,
    deleteAccount,
} from "../Auth";

export interface LoginProps {

}

const LoginPage: React.FunctionComponent<LoginProps> = (props) => {

    const auth = getAuth();
    const navigate = useNavigate();


    const [authing, setAuthing] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [registering, setRegistering] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleGoogleLogin = () => {
        signInWithGoogle().then((result) => {
            console.log('Google Sign In')
            console.log(result)
            navigate('/admin')
        }).catch((error) => {
          console.log('Hubo un error')
        });
      };
    
      const handleFacebookLogin = () => {
        signInWithFacebook().then((result) => {
            console.log('Facebook Sign In')
            console.log(result)
            navigate('/admin')
        }).catch((error) => {
          console.log('Hubo un error')
        });
      };
    
      const handleEmailSignUp = (email: string, password: string) => {
        signUpWithMail(email, password).then((result) => {
            console.log('Email Sign Up')
            console.log(result)
            navigate('/verificacion')
        }).catch((error) => {
            console.log('Hubo un error')
        });
      };

      const handleEmailSignIn = (email: string, password: string) => {
        signInWithMail(email, password).then((result) => {
            console.log('Email Sign In')
            console.log(result)
            navigate('/admin')
        }).catch((error) => {
            console.log('Hubo un error')
        });
      }

    const handleRegisterClick = () => {
        setIsActive(true);
      };
    
      const handleLoginClick = () => {
        setIsActive(false);
      };
    
    
    return (
        <>  
           <Body>
                <Container active={isActive} id="container">
                    <FormContainer style={SignUp(isActive)}>
                        <Form>
                            <Title>Registro</Title>
                            <SocialIcons>
                                <SignInButton  onClick={handleGoogleLogin} disabled={authing}><SocialAnchor href="#" className="icon"><img src="./img/svg/google.svg"></img></SocialAnchor></SignInButton>
                                <SignInButton  onClick={handleFacebookLogin} disabled={authing}><SocialAnchor href="#" className="icon"><img src="./img/svg/face.svg"></img></SocialAnchor></SignInButton>
                            </SocialIcons>
                            <Span>o usa tu mail para registrarte</Span>
                            <Input type="text" placeholder="Nombre" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Button onClick={() => handleEmailSignUp(email, password)}>Registrarme</Button>
                        </Form>
                    </FormContainer>
                    <FormContainer style={SignIn(isActive)}>
                        <Form>
                            <Title>Iniciar Sesión con tus redes</Title>
                            <SocialIcons>
                                <SignInButton  onClick={handleGoogleLogin} disabled={authing}><SocialAnchor href="#" className="icon"><img src="./img/svg/google.svg"></img></SocialAnchor></SignInButton>
                                <SignInButton  onClick={handleFacebookLogin} disabled={authing}><SocialAnchor href="#" className="icon"><img src="./img/svg/face.svg"></img></SocialAnchor></SignInButton>
                            </SocialIcons>
                            <Span>o puedes usar un mail y contraseña</Span>
                            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Anchor href="#">¿Olvidaste tu contraseña?</Anchor>
                            <Button onClick={() => handleEmailSignIn(email, password)}>Iniciar Sesión</Button>
                        </Form>
                    </FormContainer>
                    <ToggleContainer active={isActive}>
                        <Toggle active={isActive}>
                            {/* <TogglePanel> */}
                                <ToggleLeft active={isActive}> {/*isActive true => mostrar*/}
                                    <Title style={{color: 'white'}}>¿Ya tienes una cuenta?</Title>
                                    <Paragraph style={{color: 'white'}}>Puedes iniciar sesión directamente</Paragraph>
                                    <Button style={ButtonToggle} onClick={handleLoginClick}>
                                            Iniciar Sesión
                                    </Button>
                                </ToggleLeft>
                            {/* </TogglePanel> */}
                            {/* <TogglePanel> */}
                                <ToggleRight active={isActive}> 
                                    <Title style={{color: 'white'}}>Hola de nuevo!</Title>
                                    <Paragraph style={{color: 'white'}}>¿Todavía no tienes cuenta? ¡Registrate totalmente gratis!</Paragraph>
                                    <Button style={ButtonToggle} onClick={handleRegisterClick}>
                                        Registrarme
                                    </Button>
                                </ToggleRight>
                            {/* </TogglePanel> */}
                        </Toggle>
                    </ToggleContainer>
                </Container>
            </Body>
            <BodyMobile>
                <PageContainer>
                    <LogoContainer to="https://rappidtech.com/links" aria-label="homepage">
                        <SvgIcon src="logo.svg" width="40px" height="60px" />
                    </LogoContainer>
                    <Title style={{marginTop:"8vh"}}>
                        ¡Hola de nuevo!
                    </Title>
                    <Span style={{display:"flex", justifyContent:"center"}}>
                        Ingresa a tu RAppID Links
                    </Span>
                    <Form>
                        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <RemForget>
                            <Recordarme>
                                <input style={{ width: "20px"}} type="checkbox" placeholder="" />
                                <Span style={{ margin: "0 1rem 0 5px"}}>Recordarme</Span>
                            </Recordarme>
                            <Anchor style={{color: '#A84AC9'}} href="#">¿Olvidaste tu contraseña?</Anchor>
                        </RemForget>
                        <Button>Iniciar Sesión</Button>
                        <Divider style={DividerStyle}>o</Divider>
                        <BotonGoogle onClick={handleGoogleLogin}><img style={{marginRight:"1rem"}} src="./img/svg/google.svg"></img>Continuar con Google</BotonGoogle>
                        <BotonGoogle onClick={handleFacebookLogin}><img style={{marginRight:"1rem"}} src="./img/svg/face.svg"></img>Continuar con Facebook</BotonGoogle>
                        <Anchor style={{color: '#A84AC9'}} href="https://rappidtech.com/links/registro">
                            <Span style={{color:"#6B6B6B", marginRight:"5px"}}>
                                ¿No tienes una cuenta?
                            </Span>
                            Regístrate
                        </Anchor>
                    </Form>
                </PageContainer>
            </BodyMobile>
        </>
    );
}
 
export default LoginPage
    


            
