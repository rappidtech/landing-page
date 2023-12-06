import { FadingDots } from "react-cssfx-loading/";
import {Container} from "./styles";
const Loading = () => {
    return (
        <Container> 
            <FadingDots color="#A84AC9" width="300px" height="300px" duration="1s" />
        </Container>
    );
}

export default Loading;