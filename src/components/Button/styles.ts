import styled from "styled-components";

export const StyledButton = styled("button")<any>`
    background: ${(p) => p.color || "rgb(168, 74, 201)"};
    color: ${(p) => p.tcolor || "#fff"};
    font-size: 1rem;
    font-weight: 700;
    width: 180px;
    border: 1px solid ${(p) => p.borderColor || "rgb(168, 74, 201)"};
    border-radius: 4px;
    padding: 13px 30px;
    text-wrap: nowrap;
    cursor: pointer;
    max-width: 180px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 16px 30px rgb(23 31 114 / 10%);
    

    &:hover,
    &:active,
    &:focus {
        color: ${(p) => p.borderColor ? '#A84AC9' : '#fff' } ;
        border: 1px solid ${(p) => p.borderColor ? '#fff' : "#9742B4" } ;
        background-color: ${(p) => p.borderColor ? '#fff' : "#9742B4" } ;
    }
`;
