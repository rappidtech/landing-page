import styled, { CSSProp } from "styled-components";

export const Section = styled("section")`
    padding: 8rem 0 4rem 0;
    min-height: 600px;

    @media (max-width: 768px) {
        padding: 0
        min-height: 800px;
    }
`;


export const StyleCarousel : React.CSSProperties = {
    display: "flex",
    flexDirection: "column",

}

export const ItemCarousel : React.CSSProperties = {
    
}

export const ImgCarousel = styled("img")`
    width: 80%;

    @media (max-width: 768px) {
        width: 90%;
        min-width: 200px;
    }

`

export const TitleSection : React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: '#101010',
}

export const TitleCarousel : React.CSSProperties = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: '#101010',
}

export const TextCarousel : React.CSSProperties = {
    fontSize: "0.8rem",
    color: '#101010',
}

export const DataContainer : React.CSSProperties = {
    display:"flex", 
    flexDirection:"column", 
    alignItems:"center",
    justifyContent:"center",

}