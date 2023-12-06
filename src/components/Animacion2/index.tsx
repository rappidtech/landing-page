import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
    StyledCard,
    FlipCard,
    FlipCardInner,
    FlipCardFront,
    FlipCardBack
} from "./styles";


interface AnimatedFlipCardProps {
    src: string[];
    col: string[];
    rot: number[];
    dur: number[];
}

const AnimatedFlipCard = ({src, col, rot, dur}: AnimatedFlipCardProps) => {

    const cardData = [
        { rotateY: rot[0], duration: dur[0], color1: col[0], color2: col[2], borderRadius:"10px", svg: <img src={src[0]} alt="social1" /> },
        { rotateY: rot[1], duration: dur[1], color1: col[1], color2: col[0], borderRadius:"50%" , svg: <img src={src[1]} alt="social2" /> },
        { rotateY: rot[2], duration: dur[2], color1: col[2], color2: col[1], borderRadius:"10px", svg: <img src={src[2]} alt="social3" /> }
    ];
    
    const [isFlipped, setIsFlipped] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipped(prevIsFlipped => !prevIsFlipped);
        }, 3000); 
        
        return () => clearTimeout(interval);
    }, []);
    
    return (
            <StyledCard>
                <Row className="justify-content-center align-items-center d-flex w-100 h-100">
                    <Col className="justify-content-center align-items-center d-flex w-100 h-100">
                    {cardData.map((card, index) => (        
                            <FlipCard key={index}>
                                <FlipCardInner 
                                    animate={{ rotateY: isFlipped ? card.rotateY : 0 }}
                                    transition={{ duration: card.duration }} 
                                >
                                    <FlipCardFront bgcolor={card.color1} borderRadius={card.borderRadius}>
                                        {card.svg}
                                    </FlipCardFront>
                                    <FlipCardBack bgcolor={card.color2} borderRadius={card.borderRadius}>
                                        {card.svg}
                                    </FlipCardBack>
                                </FlipCardInner>
                            </FlipCard>
                    ))}
                    </Col>
                </Row>
            </StyledCard>
    
  );
};

export default AnimatedFlipCard;
