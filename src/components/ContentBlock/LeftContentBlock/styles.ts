import styled from "styled-components";

export const LeftContentSection = styled("section")`
    position: relative;
    padding: 10rem 0 8rem;

    @media only screen and (max-width: 1024px) {
        padding: 0rem 0 4rem;
    }
`;

export const Content = styled("p")`
    margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
    position: relative;
    max-width: 540px;

    @media only screen and (max-width: 575px) {
        padding-top: 2rem;
    }
`;

export const ServiceWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
`;

export const MinTitle = styled("h6")`
    font-family: "Epilogue", sans-serif;
    font-size: 2.5rem;    
    padding: 0.5rem 0;
    color: #101010;

    @media (max-width: 768px) {
        font-size: 1.5rem; 
    }
`;

export const MinPara = styled("p")`
    font-size: 0.8rem;
    color: #101010
`;


export const LinkClass = {
    padding: "5px",
    display: "flex",

    alignItems: "center",

}

export const StyledCol = styled("div")`

    display: flex;
    align-items: start;

    @media (max-width: 576px) {
        width: 100%; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    
    }
`;


export const HiddenSmall = styled.div`
    @media (max-width: 576px) {
        display: none;
    }
`;

export const ShowSmall = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 20px 0 0;

    @media (min-width: 576px) {
        display: none;
    }
`;
