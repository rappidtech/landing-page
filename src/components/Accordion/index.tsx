import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from '../Button';

import { 
	Section,
	StyledAccordion, 
	HeaderStyle,
	CardTitle,
	CardPrice, 
	AccordionStyle,
	LiStyle,
	LiStyleShadow,
	CardStyle,
	NotHidden,
	Hidden,
	CardDesktop,
	UlDesktop,
	ContainerCenter,
} from './styles'
import ToggleButton from '../../common/ToggleButton';



interface CustomToggleProps {
    children: React.ReactNode;
    eventKey: string;
	onClick: () => void;
}

function CustomToggle({ children, eventKey, onClick  } : CustomToggleProps) {

	return (
		<button
			type="button"
			style={{ 
				backgroundColor: "transparent",
				border: "none",
				width: "100%",
			}}
			onClick={onClick}
		>
			{children}
		</button>
	  );
}

interface PlansProps {
    title: string,
	content: { 
		title: string,
		plans: Array<object>,
		features: Array<object>,
	},
	button: string
	id: string,
}

function Plans({ title, content, button, id }: PlansProps) {

	const [pricePeriod, setPricePeriod] = useState<string>('mensual');
	const [activeKey, setActiveKey] = useState<string | null>('0');

	
	const handleAccordionChange = (key: string | null) => {
		setActiveKey(activeKey === key ? null : key);
	};

	return (
		<Section>
			<h6>{title}</h6>
			<ToggleButton pricePeriod={pricePeriod} setPricePeriod={setPricePeriod} />

			<NotHidden>
			{content.plans.map((plan: any, planIdx: any) => (
				
				<Accordion  defaultActiveKey="0" style={{...AccordionStyle}} activeKey={activeKey}>
					<Card style={CardStyle} >
						<Accordion.Collapse eventKey={String(planIdx)}>
							<StyledAccordion>
								<Card.Header style={{...HeaderStyle}} >
									<h6 style={CardTitle}>{plan.name}</h6>
									<p style={CardPrice}>${pricePeriod === "mensual" ? plan.price + " / mes" : plan.priceAnual + " / año"}</p>
								</Card.Header>
								<Card.Body>
									<ul>
										{Object.entries(content.features[planIdx]).map(([key, value]) => (
											parseInt(key.match(/\d+$/)?.[0] ?? '0') <= plan.numFeatures ? (
												<li style={LiStyle} key={key}>
													<img 
														style={{width:"20px",}} 
														src='./img/svg/check.svg'
														></img> {value}
												</li>
											) : (
												<li style={LiStyleShadow} key={key}>
													<img style={{width:"20px"}} src='./img/svg/x.svg'></img> {value}
												</li>
											)
											
											))}
									</ul>
								</Card.Body>
								<ContainerCenter>
										<Button>Ver mas</Button>
								</ContainerCenter>
							</StyledAccordion>
						</Accordion.Collapse>
						<Card.Header style={{backgroundColor:"#A84AC9"}}>
							<CustomToggle eventKey={String(planIdx)} onClick={() => handleAccordionChange(String(planIdx))} >
								<img src={"./img/svg/arrow-down.svg"} alt={"arrow-down"} style= {{width:"20px", transform: activeKey === String(planIdx) ? "rotate(180deg)" : "none", transition: "transform 0.5s ease"}}></img>
							</CustomToggle>
						</Card.Header>
					</Card>
				</Accordion>
			))}
			</NotHidden>
			<Hidden className='justify-content-center'>
				<Row style={{justifyContent:"space-between"}}>
					{content.plans.map((plan: any, planIdx: any) => (
						<Col style={{margin:"0.5rem 0rem"}} md={6} lg={6} xl={3} key={planIdx}>
							<Card style={CardDesktop}>
								<Card.Header style={{...HeaderStyle}} >
									<h6 style={CardTitle}>{plan.name}</h6>
									<p style={CardPrice}>${pricePeriod === "mensual" ? plan.price + " / mes" : plan.priceAnual + " / año"}</p>
								</Card.Header>
							<Card.Body>
								<ul style={UlDesktop} >
									{Object.entries(content.features[planIdx]).map(([key, value]) => (
										parseInt(key.match(/\d+$/)?.[0] ?? '0') <= plan.numFeatures ? (
											<li style={LiStyle} key={key}>
												<img 
													style={{width:"20px",}} 
													src='./img/svg/check.svg'
													></img> {value}
											</li>
										) : (
											<li style={LiStyleShadow} key={key}>
												<img style={{width:"20px"}} src='./img/svg/x.svg'></img> {value}
											</li>
										)
										
										))}
								</ul>
							</Card.Body>
							<ContainerCenter>
								<Button>Ver mas</Button>
							</ContainerCenter>
						</Card>
					</Col>
					))}
				</Row>
			</Hidden>
		</Section>
	);
}
	  

export default Plans;