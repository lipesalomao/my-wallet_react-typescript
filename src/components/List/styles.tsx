import styled from "styled-components";

type IListProps = {
    type: string;
}

export const ListContainer = styled.div<IListProps>`
    display: flex;
    flex-direction: column;

    .headerContainer {
        display: flex;
        justify-content: space-between;
        color: ${({ theme }) => theme.text.primary};

        div:first-child {
            display: flex;
            flex-direction: column;
            gap: 0;
            margin-bottom: 1rem;

            .titleUnderline {
                width: 60px;
                height: 8px;
                background-color: ${(props) => props.type === "entrada" ?  props.theme.colors.accent : props.theme.colors.warn};
            }
        }

        div {
            display: flex;
            gap: 1.5rem;

            select {
                border-radius: 5px;
                min-width: 7rem;
                height: 1.5rem;
                
            }
        }
    }
    .typeContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        color: ${({ theme }) => theme.text.primary};

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 0.2rem;

            .accentUnderline {
                height: 6px;
                width: 55px;
                background-color: ${({ theme }) => theme.colors.accent};
            }
            .warnUnderline {
                height: 6px;
                width: 55px;
                background-color: ${({ theme }) => theme.colors.warn};
            }
        }
    }

    .listRows {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        gap: 1rem;

    }
`;
