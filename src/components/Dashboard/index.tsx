import { DashboardContainer } from "./styles";

export function Dashboard() {
    return (
        <DashboardContainer>
            <div className="headerContainer">
                <div>
                    <h1 className="title">Dashboard</h1>
                    <div className="titleUnderline"></div>
                </div>
                <div className="filterContainer">
                    <select name="" id=""></select>
                    <select name="" id=""></select>
                </div>
            </div>
            <div className="firstCardsContainer">
                <div className="balaceCard">
                    <div>
                        <span>saldo</span>
                        <span>R$ 150,00</span>
                    </div>
                    <span>atualizado com base nas entradas e saídas</span>
                </div>
                <div className="incomesCard">
                    <div>
                        <span>entradas</span>
                        <span>R$ 5.000,00</span>
                    </div>
                    <span>última movimentação em 01/05/2022</span>
                </div>
                <div className="withdrawsCard">
                    <div>
                        <span>saídas</span>
                        <span>R$ 4.850,00</span>
                    </div>
                    <span>última movimentação em 01/05/2022</span>
                </div>
            </div>
            <div className="secondCardsContainer">
                <div className="wellDoneCard"></div>
                <div className="pieChartCard"></div>
            </div>
            <div className="lineChartCard"></div>
            <div className="lastCardsContainer">
                <div className="columnIncomesChartCard"></div>
                <div className="columnWithdrawsChartCard"></div>
            </div>
        </DashboardContainer>
    );
}
