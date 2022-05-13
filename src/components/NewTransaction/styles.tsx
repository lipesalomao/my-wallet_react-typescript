import styled from "styled-components";

export const NewTransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: ${({ theme }) => theme.text.primary};

    input,
    select {
        height: 1.5rem;
        border-radius: 5px;
        padding: 0 0.5rem;
    }

    .headerContainer {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;
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
    }

    .formContainer {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        span {
            margin-bottom: 0.5rem;
        }

        .titleInputContainer,
        .descriptionInputContainer {
            display: flex;
            flex-direction: column;
        }
        .detailsInputsContainer {
            display: flex;
            flex-direction: row;
            gap: 1.5rem;

            div {
                
                display: flex;
                flex-direction: column;
                width: 25%;
            }
        }

        .descriptionInputContainer {
            height: 10rem;

            textarea {
                height: 100%;
                padding: 0.5rem;
                border-radius: 5px;
                resize: none;
            }
        }

        .actionsContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            button:first-child {
                font-size: 0.8rem;
                background: none;
                color: ${({ theme }) => theme.colors.warn};
                cursor: pointer;
            }

            div {
                display: flex;
                gap: 1.5rem;

                button {
                    height: 2rem;
                    border-radius: 5px;
                    min-width: 6rem;
                }
                button:first-child {
                    color: #fff;
                    font-weight: bold;
                    background-color: ${({ theme }) => theme.colors.warn};
                }
                button:last-child {
                    color: #fff;
                    font-weight: bold;
                    background-color: ${({ theme }) => theme.colors.accent};
                }
            }
        }
    }
`;
