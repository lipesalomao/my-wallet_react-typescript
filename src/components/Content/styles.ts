import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 2rem;
    gap: 1.5rem;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 1rem;
    }
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.secondary};
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.background};
        border: 3px solid ${props => props.theme.colors.secondary};
        border-radius: 0.5rem;
    }

   
`