import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import PlansContent from "../../content/PlansContent.json";
import MockupsContent from "../../content/MockupsContent.json";

const CarouselComponent = lazy(() => import("../../components/Carousel"));
const Plans = lazy(() => import("../../components/Accordion"));
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));


const Home = () => {
    return (
        <Container>
            <ScrollToTop />
            <ContentBlock
                type="left"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="mockup-header.svg"
                id="intro"
            />
            <ContentBlock
                type="right"
                title={MiddleBlockContent.title}
                content={MiddleBlockContent.text}
                button={MiddleBlockContent.button}
                icon="carrusel-item-1.svg"
                id="mission"
            />
        </Container>
    );
};

export default Home;
