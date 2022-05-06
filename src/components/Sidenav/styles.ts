import styled from "styled-components";

export const SideNavContainer = styled.div`
    display: flex;
    width: 310px;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    border-right: 1px solid ${props => props.theme.text.primary};

    .linksContainer {
        display: flex;
        margin-top: 5rem;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        gap: 1.5rem;
        font-size: 1.3rem;

        div {
            display: flex;
            align-items: center;;
            gap: 0.5rem;
            color: ${props => props.theme.text.secondary};
            
            a {
                text-decoration: none;
                color: ${props => props.theme.text.secondary};
            }
        }
    }
`