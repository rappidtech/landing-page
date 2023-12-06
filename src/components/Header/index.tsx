import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../Button";
import {
    HeaderSection,
    LogoContainer,
    Burger,
    NotHidden,
    Menu,
    CustomNavLinkSmall,
    Label,
    Outline,
    Span,
} from "./styles";

import { getAuth, signOut } from "firebase/auth";
import { signOutUser } from "../Auth";
import { useNavigate } from "react-router-dom";

const Header = ({ t }: any) => {
    const [visible, setVisibility] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        setIsAuthenticated(user != null);
    }, []);

    const navigate = useNavigate();

    const HandleSessionClose = () => {
        signOutUser();
        navigate("/links");
    }

    const showDrawer = () => {
        setVisibility(!visible);
    };

    const onClose = () => {
        setVisibility(!visible);
    };

    const MenuItem = () => {
        const scrollTo = (id: string) => {
            const element = document.getElementById(id) as HTMLDivElement;
            element.scrollIntoView({
                behavior: "smooth",
            });
            setVisibility(false);
        };
        return (
            <>
                <CustomNavLinkSmall >
                    <Link to="/templates">
                        <Span>{t("Templates")}</Span>
                    </Link>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall >
                    <Link to="/planes">
                        <Span>{t("Planes")}</Span>
                    </Link>
                </CustomNavLinkSmall>

                {isAuthenticated ? (

                    <>
                        <CustomNavLinkSmall>
                            <Link to="/admin">
                                <Span>{t("Admin")}</Span>
                            </Link>
                        </CustomNavLinkSmall>
                        <CustomNavLinkSmall >
                            <Span onClick={() => HandleSessionClose()}>{t("Cerrar Sesión")}</Span>
                        </CustomNavLinkSmall>
                    </>

                ) : (
                    <>
                        <CustomNavLinkSmall style={{ width: "180px" }}>
                            <Link to="/login">
                                <Span>
                                    <Button color="#fff" tcolor="#A84AC9" >{t("Iniciar Sesión")}</Button>
                                </Span>
                            </Link>
                        </CustomNavLinkSmall>
                        <CustomNavLinkSmall style={{ width: "180px" }}>
                            <Link to="/registro">
                                <Span>
                                    <Button >{t("Registrarse")}</Button>
                                </Span>
                            </Link>
                        </CustomNavLinkSmall>
                    </>
                )}
                
            </>
        );
    };

    return (
        <HeaderSection>
            <Container>
                <Row justify="space-between">
                    <LogoContainer to="https://rappidtech.com/links" aria-label="homepage">
                        <SvgIcon src="logo.svg" width="101px" height="64px" />
                    </LogoContainer>
                    <NotHidden>
                        <MenuItem />
                    </NotHidden>
                    <Burger onClick={showDrawer}>
                        <Outline />
                    </Burger>
                </Row>
                <Drawer closable={false} visible={visible} onClose={onClose}>
                    <Col style={{ marginBottom: "2.5rem" }}>
                        <Label onClick={onClose}>
                            <Col span={12}>
                                <Menu>Menu</Menu>
                            </Col>
                            <Col span={12}>
                                <Outline />
                            </Col>
                        </Label>
                    </Col>
                    <MenuItem />
                </Drawer>
            </Container>
        </HeaderSection>
    );
};

export default withTranslation()(Header);

