import styled from 'styled-components';


export const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        max-width: 400px;
        
    }
`;

export const Icon = styled.img`
    position: absolute;
    right: 10px;
    cursor: pointer;
`;

export const Input = styled.input`
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;

    @media (max-width: 768px) {
    width: 90vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    max-width: 400px;
    &:hover {
        border: 1px solid #101010;
    }
    }

    
`;