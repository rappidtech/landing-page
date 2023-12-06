import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../Button";
import { MiddleBlockSection, Content, ContentWrapper, Column, H6 } from "./styles";
import { lazy } from "react";

interface MiddleBlockProps {
    title: string;
    content: string;
    button: string;
    t: any;
}

const AnimatedCard2 = lazy(() => import("../../components/Animacion2"));
const AnimatedCard3 = lazy(() => import("../../components/Animacion3"));
const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <MiddleBlockSection>
            <Column>
                <H6>{(title)}</H6>
                {button && (
                    <Button
                    name="submit"
                    onClick={() => scrollTo("mission")}
                    >
                        {t(button)}
                    </Button>
                )}
                <Row justify="center" align="middle" className="d-flex justify-content-center align-items-center">
                    <Col >
                        <AnimatedCard3/>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center flex-column">
                        <AnimatedCard2 
                            src={['https://rappidtech.com/links/img/svg/upwork.svg', 'https://rappidtech.com/links/img/svg/docs.svg', 'https://rappidtech.com/links/img/svg/GitHub2.svg']}
                            col={['#6AC580', '#EE9ADB', '#DAD077']}
                            rot={[540,900,180]}
                            dur={[0.2,0.6,1]}
                        />
                        <AnimatedCard2 
                            src={['https://rappidtech.com/links/img/svg/Behance.svg', 'https://rappidtech.com/links/img/svg/calendario.svg', 'https://rappidtech.com/links/img/svg/linkedin.svg']}
                            col={['#A7B2EB', '#FF9494', '#F148A3']}
                            rot={[900,180,540]}
                            dur={[0.2,0.6,1]}
                        />
                    </Col>
                </Row>
            </Column>
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);
