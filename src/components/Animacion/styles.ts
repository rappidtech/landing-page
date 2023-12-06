import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";


interface StyledCardProps {
    color?: string;
}
//background: linear-gradient(180deg, #FFFFFF 0%, #ECE9E6 100%);
export const StyledCard = styled.div`
    background-image: url('https://rappidtech.com/links/img/icons/Fondo.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-width: 120px;
    aspect-ratio: 1/2;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
`;

export const StyledCircle = styled(motion.div)`
    background-image: url('https://rappidtech.com/links/img/icons/Profile.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 45%;
    min-width: 70px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: #8B82FA;
    margin: 40px;
`;

export const StyledButton = styled(motion.ul)`
    width: 80%;
    min-width: 120px;
    aspect-ratio: 5/1;
    border-radius: 50px;
    background-color: #10A4BB;
    margin: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 70% }
`;


const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: transparent; }
`;

interface TypewriterProps {
    duration?: string;
    delay?: string;
    delayForBlink?: string;
}

export const Typewriter = styled.div<TypewriterProps>`
    color: #F9F9F9;
    overflow: hidden;
    border-right: .15em solid transparent;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0;
    animation: 
        ${typing} ${(props) => props.duration || '3.5s'} steps(40, end) ${(props) => props.delay || '1s'} forwards} , 
        ${blinkCaret} .75s step-end infinite ${(props) => props.delayForBlink || '5s'};
    animation-iteration-count: 8000;
`;
