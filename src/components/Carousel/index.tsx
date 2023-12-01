import { Carousel, Row, Col } from 'react-bootstrap';
import { Button } from "../Button";
import {
	Section,
	ItemCarousel,
	ImgCarousel,
	TitleCarousel,
	TextCarousel,
	StyleCarousel,
	DataContainer,
} from './styles';

interface CarouselComponentProps {
    title: string;
    content: {
        title: string;
        description: string;
        image: string;
        button: string;
    }[];
}

function CarouselComponent({title, content} : CarouselComponentProps) {

	return (
		<Section>
			<h3>
				{title}
			</h3>
			<Carousel style={{height:"500px"}} className='mb-5' interval={3000} indicators={false} data-bs-theme="dark" >
				{content.map((item: any, itemId: any) => (
					<Carousel.Item style={ItemCarousel}>
						<Row> 
							<Col md={6} className="order-md-1 order-1 d-flex justify-content-center">
								<img
									className='w-100 px-5'
									style={ImgCarousel}
									src={item.image}
									alt="First slide"
								/>
							</Col>
							<Col md={6} className="order-md-2 order-2 d-flex">
								<div className='ms-4 d-flex' style={DataContainer}>
									<h6 style={TitleCarousel}>{item.title}</h6>
									<p style={TextCarousel}>{item.description}</p>
									<Button >{item.button}</Button>
								</div>
							</Col>
						</Row> 
					</Carousel.Item>
				))}
			</Carousel>
		</Section>
	);
}

export default CarouselComponent;