import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.text.primary};
    
    h2 {
        font-size: 24px;
        font-weight: bold;
    }

    div {
        display: flex;
        justify-content: center;
        padding: 5px;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.warn};
    }
`