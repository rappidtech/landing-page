import { lazy } from "react";
import MockupsContent from "../../content/MockupsContent.json";

const CarouselComponent = lazy(() => import("../../components/Carousel"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Envolving = lazy(() => import("../../common/Envolving"));

const Templates = () => {
    return (
        <Envolving color="#F9F9F9">
            <Container>
            <ScrollToTop />
                <CarouselComponent
                    title={MockupsContent.title}
                    content={MockupsContent.carrusel}
            />
            </Container>
        </Envolving>
    );
};

export default Templates;
