import { Accordion } from "react-bootstrap";
import styled from "styled-components";

export const Section = styled("section")`
    padding: 6rem 0;
`;

export const ContainerCenter = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem 0;
`;

export const StyledAccordion = styled("div")<any>`
    background-color: #fff !important;
    
`;

export const CardStyle: React.CSSProperties = {
    border:"1px solid #101010", 
    borderRadius:"0px"
}


export const HeaderStyle: React.CSSProperties =  {
	display:"flex", 
	justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: "#A84AC9 !important",
    borderBottom:"1px solid #101010",
}

export const CardTitle : React.CSSProperties = {
    fontSize: "1.5rem",
    margin: "0 0 0 0",
}

export const CardPrice : React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    color: "#A9A9A9",
    fontWeight: "bold",
    margin: "0 0 0 0",

}

export const AccordionStyle : React.CSSProperties = {
    margin: "0 0 1rem 0",
    backgroundColor: "#fff !important",

};

export const LiStyle : React.CSSProperties = {
    fontWeight: "bold",    
    textDecoration: "none",
    display: "flex",
    
}

export const LiStyleShadow : React.CSSProperties = {
    display: "flex",
    color: "#A9A9A9",
};

export const NotHidden = styled("div")`

    width: 55vw;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

// Desktop Styles

export const Hidden = styled("div")`
    // display: flex;    
    // justify-content: center;

    @media only screen and (max-width: 768px) {
        display: none;
    }
    
`;

export const CardDesktop : React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    maxWidth: "20rem",
    margin: "0 auto",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
}

export const UlDesktop : React.CSSProperties = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    width: "100%",
}