import styled from "styled-components";

interface IRowContainerProps {
    frequency: string;
}

export const RowContainer = styled.li<IRowContainerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    cursor: pointer;

    .rowContentContainer {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        .colorType {
            width: 12px;
            height: 30px;
            background-color: ${(props)=> props.frequency === "recorrente" ? ({ theme }) => theme.colors.accent : ({ theme }) => theme.colors.warn};
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
`;

export const FrequencyColor = styled.div`

`
