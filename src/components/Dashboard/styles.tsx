import styled from "styled-components";
import usdImg from "../../assets/_usd.svg";
import arroUpImg from "../../assets/arrowup.svg";
import arrowDownImg from "../../assets/arrowdown.svg";

export const DashboardContainer = styled.div`
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
                background-color: ${({ theme }) => theme.colors.yellow};
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

    .firstCardsContainer {
        display: flex;
        min-height: 160px;
        justify-content: space-between;
        gap: 1.5rem;
        

        div {
            width: 50%;
            border-radius: 10px;
            color: #fff;
            display: flex;
            padding: 1rem;
            justify-content: space-between;
            flex-direction: column;
            font-size: 0.8rem;
            
            div {
                padding: 0;
                font-size: 1rem;

                span:last-child {
                    font-size: 1.3rem;
                    font-weight: bold;
                }
            }
        }
        .balaceCard {
            background-color: ${(props) => props.theme.colors.accent};
            background-image: url(${usdImg}); 
            background-repeat: no-repeat;
            background-position: right center;
            
            
        }
        .incomesCard {
            background: ${(props) => props.theme.colors.yellow};
            background-image: url(${arroUpImg}); 
            background-repeat: no-repeat;
            background-position: right center;
        }
        .withdrawsCard {
            background: ${(props) => props.theme.colors.warn};
            background-image: url(${arrowDownImg}); 
            background-repeat: no-repeat;
            background-position: right center;
        }
    }
    .secondCardsContainer {
        display: flex;
        min-height: 260px;
        justify-content: space-between;
        gap: 1.5rem;

        div {
            display: flex;
            width: 50%;
            flex-direction: column;
            border-radius: 10px;
            background: ${(props) => props.theme.colors.secondary};
        }
    }
    .lineChartCard {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        min-height: 260px;
        background: ${(props) => props.theme.colors.secondary};
    }
    .lastCardsContainer {
        display: flex;
        min-height: 260px;
        justify-content: space-between;
        gap: 1.5rem;

        div {
            display: flex;
            width: 50%;
            flex-direction: column;
            border-radius: 10px;
            background: ${(props) => props.theme.colors.secondary};
        }
    }
`;
