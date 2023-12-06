import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";

export const StyledCard = styled(motion.div)`
    width: 20%;
    aspect-ratio: 2/3;
    min-width: 300px;
    border-radius: 20px;
    background-color: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px
`

export const MoveCard = styled.div`
    background-color: transparent;
    width: 280px;
    height: 120px;
    perspective: 1000px;
    margin: 10px;
`
  
export const MoveCardInner = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
interface CardProps {
    bgcolor?: string;
    borderRadius?: string;
}

export const MoveCardFront = styled.div<CardProps>` 
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-image: url(${props => props.bgcolor || 'links/img/icons/event.png'});
    background-size: cover;
    background-position: center;
    color: black;
    border-radius: ${props => props.borderRadius || '10px'};
` 
