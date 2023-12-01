import styled from "styled-components";

export const StyledButton = styled("button")<any>`
    background: ${(p) => p.color || "rgb(168, 74, 201)"};
    color: ${(p) => (p.color ? "rgb(168, 74, 201)" : "#fff")};
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    border: 1px solid rgb(168, 74, 201);
    border-radius: 4px;
    padding: 13px 0;
    cursor: pointer;
    margin-top: 0.625rem;
    max-width: 180px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 16px 30px rgb(23 31 114 / 10%);

    &:hover,
    &:active,
    &:focus {
        color: #fff;
        border: 1px solid #9742B4;
        background-color: #9742B4;
    }
`;
