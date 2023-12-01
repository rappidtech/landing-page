import { lazy } from "react";

import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import PlansContent from "../../content/PlansContent.json";


const Plans = lazy(() => import("../../components/Accordion"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Planes = () => {
    return (
        <Container>
            <ScrollToTop />
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
    );
};

export default Planes;
