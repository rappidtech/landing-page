import { lazy } from "react";
import MockupsContent from "../../content/MockupsContent.json";

const CarouselComponent = lazy(() => import("../../components/Carousel"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));



const Templates = () => {
    return (
        <Container>
            <ScrollToTop />
            <CarouselComponent
                title={MockupsContent.title}
                content={MockupsContent.carrusel}
            />
        </Container>
    );
};

export default Templates;
