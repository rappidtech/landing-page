import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { response } from "express";

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
} from "./styles";



export interface LoginProps {

}

const LoginPage: React.FunctionComponent<LoginProps> = (props) => {

    const auth = getAuth();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const [authing, setAuthing] = useState(false);
    const [isActive, setIsActive] = useState(true);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const signInWithGoogle = async () => {
        setAuthing(true);
        try {
            await signInWithPopup(auth, provider)
            .then(response => {
                console.log(response.user.uid);
                setAuthing(false);
                navigate("/");
            })
            navigate("/");
        } catch (error) {   
            console.log(error);
            setAuthing(false);
        }
    }

    const handleRegisterClick = () => {
        setIsActive(true);
      };
    
      const handleLoginClick = () => {
        setIsActive(false);
      };
    
    console.log(isActive);
    return (
        <>  
           <Body>
                <Container active={isActive} id="container">
                    <FormContainer style={SignUp(isActive)}>
                        <Form>
                            <Title>Registro</Title>
                            <SocialIcons>
                                <SocialAnchor href="#" className="icon"><FontAwesomeIcon style={{color:'#101010', fontSize:'20px'}} icon={faGooglePlusG}/></SocialAnchor>
                                <SocialAnchor href="#" className="icon"><FontAwesomeIcon style={{color:'#101010', fontSize:'20px'}} icon={faFacebookF}/></SocialAnchor>
                                <SocialAnchor href="#" className="icon"><FontAwesomeIcon style={{color:'#101010', fontSize:'20px'}} icon={faGithub}/></SocialAnchor>
                                <SocialAnchor href="#" className="icon"><FontAwesomeIcon style={{color:'#101010', fontSize:'20px'}} icon={faLinkedinIn}/></SocialAnchor>
                            </SocialIcons>
                            <Span>o usa tu mail para registrarte</Span>
                            <Input type="text" placeholder="Nombre" />
                            <Input type="email" placeholder="Email" />
                            <Input type="password" placeholder="Contraseña" />
                            <Button>Sign Up</Button>
                        </Form>
                    </FormContainer>
                    <FormContainer style={SignIn(isActive)}>
                        <Form>
                            <Title>Iniciar Sesión con tus redes</Title>
                            <SocialIcons>
                                <SocialAnchor href="#" className="icon"><FontAwesomeIcon style={{color:'#101010', fontSize:'20px'}} icon={faGooglePlusG}/></SocialAnchor>
                                <SocialAnchor href="#" className="icon"><FontAwesomeIcon style={{color:'#101010', fontSize:'20px'}} icon={faFacebookF}/></SocialAnchor>
                                <SocialAnchor href="#" className="icon"><FontAwesomeIcon style={{color:'#101010', fontSize:'20px'}} icon={faGithub}/></SocialAnchor>
                                <SocialAnchor href="#" className="icon"><FontAwesomeIcon style={{color:'#101010', fontSize:'20px'}} icon={faLinkedinIn}/></SocialAnchor>
                            </SocialIcons>
                            <Span>o puedes usar un mail y contraseña</Span>
                            <Input type="email" placeholder="Email" />
                            <Input type="password" placeholder="Contraseña" />
                            <Anchor href="#">¿Olvidaste tu contraseña?</Anchor>
                            <Button>Iniciar Sesión</Button>
                        </Form>
                    </FormContainer>
                    <ToggleContainer active={isActive}>
                        <Toggle active={isActive}>
                            {/* <TogglePanel> */}
                                <ToggleLeft active={isActive}> {/*isActive true => mostrar*/}
                                    <Title style={{color: 'white'}}>¿Ya tienes una cuenta?</Title>
                                    <Paragraph style={{color: 'white'}}>Puedes iniciar sesión directamente</Paragraph>
                                    <Button onClick={handleLoginClick}>
                                            Iniciar Sesión
                                    </Button>
                                </ToggleLeft>
                            {/* </TogglePanel> */}
                            {/* <TogglePanel> */}
                                <ToggleRight active={isActive}> 
                                    <Title style={{color: 'white'}}>Hola de nuevo!</Title>
                                    <Paragraph style={{color: 'white'}}>¿Todavía no tienes cuenta? ¡Registrate totalmente gratis!</Paragraph>
                                    <Button onClick={handleRegisterClick}>
                                        Registrarme
                                    </Button>
                                </ToggleRight>
                            {/* </TogglePanel> */}
                        </Toggle>
                    </ToggleContainer>
                </Container>
            </Body>
        </>
    );
}
 
export default LoginPage
    


            
