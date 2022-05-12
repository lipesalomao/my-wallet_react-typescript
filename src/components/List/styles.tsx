import styled from "styled-components";

export const ListContainer = styled.div`
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
                background-color: ${({ theme }) => theme.colors.accent};
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

        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            background-color: ${({ theme }) => theme.colors.secondary};
            border-radius: 10px;

            .rowContentContainer {
                display: flex;
                gap: 0.5rem;
                align-items: center;

                .colorType {
                    width: 12px;
                    height: 30px;
                    background-color: ${({ theme }) => theme.colors.accent};
                }
                .rowTextContainer {
                    display: flex;
                    flex-direction: column;

                    .rowTitle {
                        font-size: 1.2rem;
                        font-weight: bold;
                        color: ${({ theme }) => theme.text.primary};
                    }
                    .rowType {
                        font-size: 0.8rem;
                        color: ${({ theme }) => theme.text.secondary};
                    }
                }

            }
            .rowValue {
                margin-right: 1rem;
                font-size: 1.6rem;
                font-weight: bold;
                color: ${({ theme }) => theme.text.primary};
            }

        }
    }
`;
