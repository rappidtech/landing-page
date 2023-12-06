import styled from "styled-components";
import { Carousel, Row, Col } from 'react-bootstrap';
import { Button } from "../Button";
import {
	Section,

	ItemCarousel,
	ImgCarousel,
	TitleSection,
	TitleCarousel,
	TextCarousel,
	StyleCarousel,
	DataContainer,
} from './styles';
import { lazy } from "react";
const Envolving = lazy(() => import("../../common/Envolving"));

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
			<h3 style={TitleSection}>{title}</h3>
			<Carousel style={{height:"500px"}}  interval={3000} indicators={false} controls={false} data-bs-theme="dark" >
				{content.map((item: any, itemId: any) => (
					<Carousel.Item style={ItemCarousel}>
						<Row> 
							<Col md={6} className="order-md-1 order-1 d-flex justify-content-center">
								<ImgCarousel
									src={`${process.env.PUBLIC_URL}${item.image}`}
									alt={`Slide ${itemId}`}
								/>
							</Col>
							<Col md={6} className="order-md-2 order-2 d-flex">
								<div className='ms-4 d-flex' style={DataContainer}>
									<h6 style={TitleCarousel}>{item.title}</h6>
									<p style={TextCarousel}>{item.description}</p>
									<Button>{item.button}</Button>
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