import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";

export const StyledCard = styled(motion.div)`
    
    min-width: 300px;
    aspect-ratio: 2/1;
    border-radius: 20px;
    background-color: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 28px 0 28px 0;

    @media (max-width: 768px) {
        width: 60%;
    }
`
interface MiniCardProps {
    bgcolor?: string;
}

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);
    }	
`

export const FlipCard = styled.div`
    background-color: transparent;
    width: 100px;
    aspect-ratio: 1/1;
    perspective: 1000px;

    @(max-width: 768px) {
        width: 50px;
    }
    
`
  
export const FlipCardInner = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;

`
interface CardProps {
    bgcolor?: string;
    borderRadius?: string;
}

export const FlipCardFront = styled.div<CardProps>` 
    display: flex;
    justify-content: center;
    padding: 10px;
    position: absolute;
    width: 85px;
    aspect-ratio: 1/1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: ${props => props.bgcolor || '#2980b9'};
    border-radius: ${props => props.borderRadius || '10px'};
` 

 
export const FlipCardBack = styled.div<CardProps>`
    display: flex;
    justify-content: center;
    padding: 10px;
    position: absolute;
    right: 0;
    width: 85px;
    aspect-ratio: 1/1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: ${props => props.bgcolor || '#2980b9'};
    border-radius: ${props => props.borderRadius || '10px'};
`