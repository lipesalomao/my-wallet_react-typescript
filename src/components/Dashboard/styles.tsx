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

        div:first-child {
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
        .filterContainer{
            .clear{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 15%;
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
            .value-container {
                width: 100%;
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
        .pieChartCard {
            display: flex;
            flex-direction: row;
            padding: 0;

            .info {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 2rem;
                width: 60%;
                flex-direction: column;
                gap: 1rem;
                color: ${({ theme }) => theme.text.primary};

                .balance {
                    display: flex;
                    width: 100%;
                    flex-direction: row;
                    justify-content: start;
                    align-items: center;
                }
                .title {
                    font-size: 1.3rem;
                    font-weight: bold;
                    margin-bottom: 2rem;
                }
                .text {
                    font-size: 0.9rem;
                }
                .incomes-balance,
                .expenses-balance {
                    width: 45px;
                    height: 45px;
                    border-radius: 15%;
                    display: flex;
                    font-size: 0.9rem;
                    font-weight: bold;
                    justify-content: center;
                    align-items: center;
                    margin-right: 5px;
                    color: #fff;
                    background: ${({ theme }) => theme.colors.yellow};
                }
                .expenses-balance {
                    background: ${({ theme }) => theme.colors.warn};
                }
            }
        }
        .messageCard{
            display: flex;
            flex-direction: column;
            padding: 2rem;
            justify-content: space-between;
            color: ${({ theme }) => theme.text.primary};

            .title {
                font-size: 1.6rem;
                font-weight: bold;
            }
            .subtitle{
                font-size: 0.9rem;
                font-weight: lighter;
            }
        }
    }
    .lineChartCard {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 2rem;
        gap: 1rem;
        min-height: 260px;
        background: ${(props) => props.theme.colors.secondary};

        .info{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            color: ${({ theme }) => theme.text.primary};

            .title{
                font-size: 1.4rem;
                font-weight: bold;
            }

            .legend{
                display: flex;
                align-items: center;
                gap: 2rem;
                
                .incomes, .expenses {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                }

                .incomes-color, .expenses-color{
                    width: 25px;
                    height: 25px;
                    border-radius: 15%;
                    background: ${({ theme }) => theme.colors.yellow};
                }
                .expenses-color{
                    background: ${({ theme }) => theme.colors.warn};
                }
            }
        }
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
