import styled, { css, keyframes } from 'styled-components';

export const move = keyframes`
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
`;

export const Body = styled.div`

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  background-color: #c9d6ff;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }

  
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #101010;
`;


export const Container = styled.div<{ active: boolean }>`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
  `;
  
export const Span = styled.span`
  font-size: 12px;
`;
  
export const Anchor = styled.a`
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;

  @media (max-width: 300px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
`;
  
export const Button = styled.button`
  background-color: #5A82C2;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 70vw;
    border-radius: 5px;
    color: #F9F9F9;
    background-color: #A84AC9;
    max-width: 400px;

  }


`;
  
export const HiddenButton = styled(Button)`
  background-color: transparent;
  border-color: #fff;
`;
  

export const Form = styled.form`
  background-color: #fff;;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;

  @media (max-width: 768px) {
    height: 70vh;
  }
  
`;


export const Input = styled.input`
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 90vw;
  
    &:hover {
        border: 1px solid #101010;

    }

  }

`;

export const FormContainer = styled.div`
  
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  
`;
  
export const SignIn = (active: boolean): React.CSSProperties => {
  return {
    left: 0,
    width: '50%',
    zIndex: 2,
    transform: active ? 'translateX(100%)' : 'translateX(0)',
  }
}

export const SignUp = (active: boolean): React.CSSProperties => {
  return {
    left: 0,
    width: '50%',
    opacity: active ? 1 : 0,
    zIndex: active ? 5 : 0,
    transform: active ? 'translateX(100%)' : 'translateX(0)',
  }
}


export const SocialIcons = styled.div`
  margin: 20px 0;

`;

export const SocialAnchor = styled.a`
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
`



// A continuación, se definen los estilos para sign-in, sign-up y los paneles toggle.
// Debes completar estos estilos basándote en tu CSS original.


export const ToggleContainer = styled.div<{ active?: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 50px 0 0 50px;
  z-index: 1000;

  ${props => props.active && css`
  transform: translateX(-100%);
  border-radius: 0 50px 50px 0;
`}
`;

export const Toggle = styled.div<{ active?: boolean }>`
  
  height: 100%;
  background: linear-gradient(to right, #A84AC9, #A84AC9);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
  
  
  ${props => props.active && css`
  transform: translateX(50%);
`}
`;

export const TogglePanel = styled.div<{ active?: boolean }>`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
  z-index: 0;
  

`;

export const ToggleLeft = styled(TogglePanel)<{ active?: boolean }>`
  transform: translateX(-200%);

  ${props => props.active && css`
    transform: translateX(0%);    
  `}
`;

export const ToggleRight = styled(TogglePanel)<{ active?: boolean }>`
  right: ;
  transform: translateX(100%);

  ${props => props.active && css`
    transform: translateX(300%);
  `}
`;


export const ButtonToggle = {
  backgroundColor:"#A84AC9", 
  border:"1px solid #fff"

}

export const ButtonToggleHover = {
  backgroundColor:"white", 
}

export const ButtonAction = {
  
}


// Screen Size < 768px

export const BodyMobile = styled(Body)`
  display: none;
  background: #fff;
  height: 100vh;
  align-items: center;
  overflow: hidden;
  margin: 5vh 2vh;


  @media (max-width: 768px) {
    display: flex;
    max-width: 400px;
    align-items: center;
    margin: 20px auto;
    justify-content: space-between;
    
  }

`;

export const DividerStyle = {
  margin: "2rem 0",
  color: "#CECECE",
  borderColor: "#CECECE",
}

export const RemForget = styled.div`
  width: 90vw;  
  max-width: 400px;
  display: flex; 
  justify-content: space-between; 
  align-items: center;

  @media (max-width:300px) {
    display: block;
  }

`;

export const Recordarme = styled.div`
  display: flex; 
  align-items: center; 
  margin-top: 8px;
  justify-content: center;

`;


export const BotonGoogle = styled(Button)`
  

  @media (max-width: 768px) {
    background-color: #fff;
    color: #101010;
    border: 1px solid #ccc;
    border-radius: 50px;
    width: 90vw;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: none;
    padding: 8px 0;
  }
`;

export const UserInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border : "1px solid #ccc",


  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;

  @media (max-width: 768px) {
    width: 90vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    max-width: 400px;
  
    &:hover, &:focus, &:active {
        border: 2px solid #101010;

    }

  }

`;

export const UserInputField = styled.input`
  background-color: #fff !important;
  color: #6B6B6B;
  border: none;
  padding: 10px 0;
  outline: none !important;
  outline-width: 0;
  outline-offset: 0px !important;

  &:hover, &:focus, &:active {
    outline: none !important;
    outline-width: 0;
    outline-offset: 0px !important;
    border: none !important;
    -webkit-box-shadow: none !important;
    -webkit-text-fill-color: #6B6B6B !important;
    -webkit-appearance: none
    outline: none !important;
    outline-width: 0;
    outline-offset: 0px !important;
    border: none !important;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active {
    -webkit-box-shadow: none !important;
    -webkit-text-fill-color: #6B6B6B !important;
    -webkit-appearance: none
    outline: none !important;
    outline-width: 0;
    outline-offset: 0px !important;
    border: none !important;
  }

  }
  
`

export const UserLabel = {
  color:"#6B6B6B",
  paddingLeft: "12px",
}

export const SignInButton = styled(Button)`
  background-color: transparent; 
  border: none;
  padding: 0;
  textTransform: none;
  margin: 0;
`