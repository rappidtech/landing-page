import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import i18n from "i18next";
import {
    FooterSection,
    Title,
    NavLink,
    ButtonLink,
    Extra,
    LogoContainer,
    Para,
    Large,
    Chat,
    Empty,
    FooterContainer,
    Language,
    Label,
    LanguageSwitch,
    LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
    href: string;
    src: string;
}

const Footer = ({ t }: any) => {
    const handleChange = (language: string) => {
        i18n.changeLanguage(language);
    };

    const SocialLink = ({ href, src }: SocialLinkProps) => {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={src}
                aria-label={src}
            >
                <SvgIcon src={src} width="50px" height="50px" />
            </a>
        );
    };

    return (
        <>
            <FooterSection>
                <Container>
                    <Row justify="space-between">
                        <Col lg={10} md={10} sm={12} xs={12}>
                            <Language>{t("Contacto")}</Language>
                            <Para>
                                {t(
                                    `¿Tienes alguna pregunta?`,
                                )}
                            </Para>
                            <Para>
                                {t(
                                    `Contáctanos`,
                                )}
                            </Para>
                            <a target="blank" style={{marginRight:"5px"}} href="mailto:nosotros@rappid.com">
                                <img width={"35px"} src="./links/img/svg/emailw.svg" alt="" />
                            </a>
                            <a target="blank" href="https://api.whatsapp.com/send?phone=543814094843&text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20software">
                                <img width={"35px"} src="./links/img/svg/whatsappw.svg" alt="" />
                            </a>
                        </Col>
                        <Col lg={8} md={8} sm={12} xs={12}>
                            <Title>{t("Legales")}</Title>
                            <Large to="/" left="true">
                                {t("Application Security")}
                            </Large>
                            <Large left="true" to="/">
                                {t("Software Principles")}
                            </Large>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                        {/* <Col lg={8} md={8} sm={12} xs={12}> */}
                            <Title>{t("Enlaces")}</Title>
                            <Large left="true" to="/">
                                {t("Home")}
                            </Large>
                            <Large left="true" to="https://rappidtech.com/links/templates">
                                {t("Templates")}
                            </Large>
                            <Large left="true" to="https://rappidtech.com/links/planes">
                                {t("Planes")}
                            </Large>
                            {/* <Large left="true" to="/">
                                {t("Careers & Culture")}
                            </Large> */}
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        {/* <Col lg={10} md={10} sm={12} xs={12}>
                            <Empty />
                            <Language>{t("Address")}</Language>
                            <Para>Rancho Santa Margarita</Para>
                            <Para>2131 Elk Street</Para>
                            <Para>California</Para>
                        </Col> */}
                        <Col lg={8} md={8} sm={12} xs={12}>
                            {/* <Title>{t("Company")}</Title>
                            <Large left="true" to="/">
                                {t("Home")}
                            </Large>
                            <Large left="true" to="/">
                                {t("Templates")}
                            </Large>
                            <Large left="true" to="/">
                                {t("Planes")}
                            </Large> */}
                            {/* <Large left="true" to="/">
                                {t("Careers & Culture")}
                            </Large> */}
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            {/* <Label htmlFor="select-lang">{t("Language")}</Label>
                            <LanguageSwitchContainer>
                                <LanguageSwitch
                                    onClick={() => handleChange("en")}
                                >
                                    <SvgIcon
                                        src="united-states.svg"
                                        aria-label="homepage"
                                        width="30px"
                                        height="30px"
                                    />
                                </LanguageSwitch>
                                <LanguageSwitch
                                    onClick={() => handleChange("es")}
                                >
                                    <SvgIcon
                                        src="spain.svg"
                                        aria-label="homepage"
                                        width="30px"
                                        height="30px"
                                    />
                                </LanguageSwitch>
                            </LanguageSwitchContainer> */}
                        </Col>
                    </Row>
                </Container>
            </FooterSection>
            <Extra>
                <Container border={true}>
                    <Row
                        justify="space-between"
                        align="middle"
                        style={{ paddingTop: "3rem" }}
                    >
                        <NavLink to="https://rappidtech.com/links">
                            <LogoContainer>
                                <SvgIcon
                                    src="logow.svg"
                                    aria-label="homepage"
                                    width="101px"
                                    height="64px"
                                />
                            </LogoContainer>
                        </NavLink>
                        <FooterContainer>
                            <SocialLink
                                href="https://www.instagram.com/rappidtech/"
                                src="instagramw.svg"
                            />
                            <SocialLink
                                href="https://www.linkedin.com/company/100710215/admin/feed/posts/"
                                src="linkedinw.svg"
                            />
                            <ButtonLink  to="http://rappidtech.com/links/registro">
                                <Button borderColor="#fff"> 
                                        Comenzar Gratis
                                </Button>
                            </ButtonLink>
                        </FooterContainer>
                    </Row>
                </Container>
            </Extra>
        </>
    );
};

export default withTranslation()(Footer);
