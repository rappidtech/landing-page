import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
    StyledCard,
    MoveCard,
    MoveCardInner,
    MoveCardFront,
} from "./styles";

const cardData = [
    { bgcolor: 'https://rappidtech.com/links/img/icons/Event.png', borderRadius: '8px', moveD: 140},
    { bgcolor: 'https://rappidtech.com/links/img/icons/Spotify.png', borderRadius: '8px', moveD: 70},
    { bgcolor: 'https://rappidtech.com/links/img/icons/YouTube.png', borderRadius: '8px', moveD: -92}
];

const AnimatedFlipCard = () => {
    const [moveCards, setMoveCards] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setMoveCards(prevMoveCards => !prevMoveCards); 
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <StyledCard>
            <Col>
                {cardData.map((card, index) => (        
                    <Row key={index} className="justify-content-center align-items-center d-flex">
                        <MoveCard>
                            <MoveCardInner 
                                animate={{ y: moveCards ? card.moveD * (index + 1) : 0 }}
                                transition={{ duration: 0.2, delay: index * 0.2 }} 
                            >
                                <MoveCardFront bgcolor={card.bgcolor} borderRadius={card.borderRadius}/>
                            </MoveCardInner>
                        </MoveCard>
                    </Row>
                ))}
            </Col>
        </StyledCard>
    );
};

export default AnimatedFlipCard;
