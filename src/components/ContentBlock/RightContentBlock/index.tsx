import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
    RightBlockContainer,
    Content,
    ContentWrapper,
    ButtonWrapper,
    MinTitle,
    MinPara,
} from "./styles";

const RightBlock = ({
    title,
    content,
    button,
    icon,
    t,
    id,
}: ContentBlockProps) => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <RightBlockContainer>
            <Fade direction="right">
                <Row justify="space-between" align="middle" id={id}>
                    <Col lg={11} md={11} sm={12} xs={24}>
                        <SvgIcon src={icon} width="100%" height="100%" />
                    </Col>
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <MinTitle>{t(title)}</MinTitle>
                            <MinPara>{t(content)}</MinPara>
                           
                        </ContentWrapper>
                    </Col>
                </Row>
            </Fade>
        </RightBlockContainer>
    );
};

export default withTranslation()(RightBlock);
