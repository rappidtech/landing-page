
import { Col, Row } from "react-bootstrap";
import {
    StyledCard,
    StyledCircle,
    StyledButton,
    Typewriter,
} from "./styles";

const buttonData = [
    { content: "Behance",      delay: 1 },
    { content: "Sitio Web",    delay: 2 },
    { content: "Mi Portfolio", delay: 3 },
    { content: "Fiverr",       delay: 4 },
    
];

const AnimatedCard = () => {
  return (
    <Row>
        <Col>

        </Col>
        <Col className="justify-content-center align-items-center d-flex">
            <StyledCard>
            <StyledCircle
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                        duration: 2, 
                        delay: 0, 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        repeatDelay: 3}}
                />
                    {buttonData.map((button, index) => (
                    <StyledButton
                        key={index}
                        initial={{ y: 50, opacity: 0 }}    
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: button.delay, 
                            repeat: Infinity, 
                            repeatType: "reverse", 
                            repeatDelay: 4.5
                        }}
                    >
                        <Typewriter duration="5s" delay={`${button.delay}s`} delayForBlink="6s">
                            {button.content}
                        </Typewriter>    
                    </StyledButton>
                ))}

            </StyledCard>
        </Col>
    </Row>
  );
};

export default AnimatedCard;
