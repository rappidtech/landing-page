import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
    LeftContentSection,
    Content,
    ContentWrapper,
    ServiceWrapper,
    MinTitle,
    MinPara,
    LinkClass,
    StyledCol,
    HiddenSmall,
    ShowSmall,
} from "./styles";

import { Button } from "../../Button";
import { Link } from "react-router-dom";
import AnimatedCard from "../../Animacion";
const LeftContentBlock = ({
    icon,
    title,
    content,
    section,
    t,
    id,
}: ContentBlockProps) => {
    return (
        <LeftContentSection>
            <Fade direction="left">
                <Row justify="space-between" align="middle" id={id}>
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <MinTitle>{t(title)}</MinTitle>
                            <MinPara>{t(content)}</MinPara>
                        </ContentWrapper>
                    </Col>
                    <Col lg={11} md={11} sm={12} xs={24}>
                        {icon !== "" ? (
                            <SvgIcon src={icon} width="100%" height="100%" />
                        ) : (
                            <HiddenSmall>
                                <AnimatedCard />
                            </HiddenSmall>
                        )
                        }
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col className="d-flex justify-content-center align-items-center">
                            {icon !== "" ? (
                                <></>
                                ) :( 
                                    
                                    <ShowSmall>
                                        <AnimatedCard />
                                    </ShowSmall>
                                
                                )}  
                    </Col>
                    <Col>
                        <StyledCol >
                            <Link style={LinkClass} target="blank" to="https://rappidtech.com/links/demo1/" >
                                <Button color="#fff" tcolor="#A84AC9">Ver Demo</Button>
                            </Link>
                            <Link style={LinkClass} to="/registro">
                                <Button>{"Comenzar Gratis"}</Button>
                            </Link>
                        </StyledCol>
                    </Col>
                </Row>
            </Fade>
        </LeftContentSection>
    );
};

export default withTranslation()(LeftContentBlock);
