import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    color: ${props => props.theme.text.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.text.primary};

    div:not(:last-child) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
`;
