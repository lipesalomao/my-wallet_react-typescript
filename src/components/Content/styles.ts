import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 2rem;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
`