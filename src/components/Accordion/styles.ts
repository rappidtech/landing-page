import { Accordion } from "react-bootstrap";
import styled from "styled-components";

export const Section = styled("section")`
    padding: 4rem 0;
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
    opacity: "0.9",
    filter: "blur(2px)",
}

export const CardHeaderCollapse : React.CSSProperties = {
    backgroundColor:"#A84AC9",
    borderRadius: "5px",
}


export const HeaderStyle: React.CSSProperties =  {
	display:"flex", 
    flexDirection:"column",
	justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: "#A84AC9",
    
    
}

export const TitleSection = styled("h3")`
    font-size: 2.5rem;
    font-weight: "bold";
    color: #101010;
    text-align: center;
    margin-bottom: 2rem;

    @media(max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const CardTitle : React.CSSProperties = {
    fontSize: "1.5rem",
    margin: "0 0 0 0",
    color:"#f9f9f9"
}

export const CardPrice : React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    color: "#D9D9D9",
    fontWeight: "bold",
    margin: "0 0 0 0",

}

export const AccordionStyle : React.CSSProperties = {
    margin: "0 0 1rem 0",
    backgroundColor: "#fff !important",
    minWidth: "300px",
    borderRadius:"20px",

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    boxShadow: "5px 5px 10px 1px rgba(168, 74, 201, 0.5)",
    backgroundColor: "#fff",
}


export const CardDesktopBlur : React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    maxWidth: "20rem",
    margin: "0 auto",
    boxShadow: "5px 5px 10px 1px rgba(168, 74, 201, 0.5)",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    opacity: "0.9",
    filter: "blur(2px)",
    }


export const UlDesktop : React.CSSProperties = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    width: "100%",
}
