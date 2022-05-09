import styled from 'styled-components';

export const NewTransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .headerContainer {
        display: flex;
        justify-content: space-between;
        color: ${({ theme }) => theme.text.primary};

        div:first-child{
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

`