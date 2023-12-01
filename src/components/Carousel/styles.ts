import styled, { CSSProp } from "styled-components";

export const Section = styled("section")`
    padding: 6rem 0;
`;


export const StyleCarousel : React.CSSProperties = {
    display: "flex",
    flexDirection: "column",

}

export const ItemCarousel : React.CSSProperties = {
    
}

export const ImgCarousel : React.CSSProperties = {
    width: "200px",
    objectFit: "cover",
    objectPosition: "center",
}

export const TitleCarousel : React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "bold",
}

export const TextCarousel : React.CSSProperties = {
    fontSize: "1rem",
}

export const DataContainer : React.CSSProperties = {
    display:"flex", 
    flexDirection:"column", 
    alignItems:"center",
    justifyContent:"center",

}