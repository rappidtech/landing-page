import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import PlansContent from "../../content/PlansContent.json";
import MockupsContent from "../../content/MockupsContent.json";
import MiddleBlock from "../../components/MiddleBlock";

const CarouselComponent = lazy(() => import("../../components/Carousel"));
const Plans = lazy(() => import("../../components/Accordion"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Envolving = lazy(() => import("../../common/Envolving"));
const Loading = lazy(() => import("../../common/Loading"));


const Home = () => {
    return (
        <div style={{margin:"0", padding:"0", overflowX:"hidden", width:"100%"}}>
            <ScrollToTop />
            <Envolving color="#F9F9F9">
                <Container>
                    <ContentBlock
                        type="left"
                        title={IntroContent.title}
                        content={IntroContent.text}
                        icon="mockup-header.svg"
                        id="intro"
                    />
                </Container>
            </Envolving>
            <Envolving color="#E9C0E9">
                <Container>
                    <CarouselComponent
                        title={MockupsContent.title}
                        content={MockupsContent.carrusel}
                    />
                </Container>
            </Envolving>
            <Envolving color="#F9F9F9">
                <Container>
                    <ContentBlock
                        type="left"
                        title={MissionContent.title}
                        content={MissionContent.text}
                        icon=""
                        id="intro"
                        />
                </Container>
            </Envolving>

            <Envolving color="#E9C0E9">
                <Container>
                    <MiddleBlock
                        title={MiddleBlockContent.title}
                        content={MiddleBlockContent.text}
                        button={MiddleBlockContent.button}
                    >
                    </MiddleBlock>
                </Container>
            </Envolving>
            <Envolving color="#F9F9F9">
                <Container>
                    <Plans
                        title={PlansContent.title}
                        content={{
                            title: PlansContent.title,
                            plans: PlansContent.plans,
                            features: PlansContent.features,
                        }}
                        button={MiddleBlockContent.button}
                        id="plans"
                        />
                </Container>
            </Envolving>

        </div>
    );
};

export default Home;
