import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from '../Button';

import { 
	CardDesktopBlur,
	Section,
	StyledAccordion, 
	HeaderStyle,
	CardHeaderCollapse,
	TitleSection,
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
	const [hovers, setHovers] = useState<{ [key: number]: boolean }>({});


    const hoverStyle = {
        ...CardDesktop,
        transform: "scale(1.05)", 
        boxShadow: "5px 5px 15px 2px rgba(168, 74, 201, 0.7)",
    };

	const handleHover = (index: number, hoverState: boolean):void => {
		setHovers(prevHovers => ({ ...prevHovers, [index]: hoverState }));
	};

	
	const handleAccordionChange = (key: string | null) => {
		setActiveKey(activeKey === key ? null : key);
	};

	return (
		<Section>
			<TitleSection>{title}</TitleSection>
			<ToggleButton pricePeriod={pricePeriod} setPricePeriod={setPricePeriod} />

			<NotHidden>
			{content.plans.map((plan: any, planIdx: any) => (
				
				<Accordion  defaultActiveKey="0" style={{...AccordionStyle}} activeKey={activeKey}>
					<Card>
						<Accordion.Collapse eventKey={String(planIdx)}>
							<StyledAccordion style={planIdx === 0 ? {} : CardStyle}>
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
														src={`${process.env.PUBLIC_URL}/img/svg/check.svg`}
														></img> {value}
												</li>
											) : (
												<li style={LiStyleShadow} key={key}>
													<img style={{width:"20px"}} src={`${process.env.PUBLIC_URL}/img/svg/x.svg`}></img> {value}
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
						<Card.Header style={CardHeaderCollapse}>
							<CustomToggle eventKey={String(planIdx)} onClick={() => handleAccordionChange(String(planIdx))} >
								{activeKey === String(planIdx) ? (
									<></>
								): (
									<h6 style={CardTitle}>{plan.name}</h6>
								)
								}
								<img src={`${process.env.PUBLIC_URL}/img/svg/arrow-down.svg`} alt={"arrow-down"} style= {{width:"20px", transform: activeKey === String(planIdx) ? "rotate(180deg)" : "none", transition: "transform 0.5s ease"}}></img>
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
							<Card 
								style={planIdx === 0 && hovers[planIdx] ? hoverStyle : planIdx === 0 ? CardDesktop : CardDesktopBlur}
								onMouseEnter={() => handleHover(planIdx, true)} 
								onMouseLeave={() => handleHover(planIdx, false)}
							>
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
														src={`${process.env.PUBLIC_URL}/img/svg/check.svg`}
														></img> {value}
												</li>
											) : (
												<li style={LiStyleShadow} key={key}>
													<img style={{width:"20px"}} src={`${process.env.PUBLIC_URL}/img/svg/x.svg`}></img> {value}
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