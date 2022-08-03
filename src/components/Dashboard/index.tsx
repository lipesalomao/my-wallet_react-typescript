import { useContext, useEffect, useState } from "react";
import { ITransactionModel } from "../../models/TransactionModel";
import { useApi } from "../../hooks/useApi";
import { DashboardContainer } from "./styles";
import CountUp from "react-countup";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { IUserModel } from "../../models/UserModel";
import { PieChartComponent } from "../Charts/PieChart";
import { LineChartComponent } from "../Charts/LineChart";
import { AiOutlineClear } from "react-icons/ai";


const months = (key: number) => {
    const monthEquivalence: any = {
        1: "Jan",
        2: "Fev",
        3: "Mar",
        4: "Abr",
        5: "Mai",
        6: "Jun",
        7: "Jul",
        8: "Ago",
        9: "Set",
        10: "Out",
        11: "Nov",
        12: "Dez",
    };
    return monthEquivalence[key];
};

export function Dashboard() {
    const api = useApi();
    const currentYear = new Date().getFullYear();
    const [data, setData] = useState<any>([]);
    const [year, setYear] = useState<number | string>();
    const [month, setMonth] = useState<number | string>();
    const [totalIncomes, setTotalIncomes] = useState<number>(0);
    const [totalExpenses, setTotalExpenses] = useState<number>(0);
    const [lastIncomeDate, setLastIncomeDate] = useState<string>("");
    const [lastExpenseDate, setLastExpenseDate] = useState<string>("");

    const auth: any = useContext(AuthContext);

    const balanceCalc = (incomes: number, expenses: number) => {
        const totalAmount = incomes + expenses;
        const expensesPercentage = ((expenses / totalAmount) * 100).toFixed(1);
        const incomesPercentage = ((incomes / totalAmount) * 100).toFixed(1);

        return {
            expensesPercentage,
            incomesPercentage,
        };
    };

    async function getFullData() {
        await api
            .getAllTransactions(auth.user.uid, year, month)
            .then((res: ITransactionModel[]) => {
                handleData(res);
                handleLineChartData(res, month);
            });
    }
    function handleLineChartData(data: ITransactionModel[], month?: number | string) {
        setData([
            {
                month: "Jan",
                entradas: 1234,
                saidas: 1234,
            },
            {
                month: "Fev",
                entradas: 3234,
                saidas: 2234,
            },
        ]);
    }
    function handleData(data: ITransactionModel[]) {
        let incomes: any = [];
        let expenses: any = [];

        const incomesSort = data.sort(
            (a: ITransactionModel, b: ITransactionModel) => {
                return a.date < b.date ? 1 : -1;
            }
        );
        const expensesSort = data.sort(
            (a: ITransactionModel, b: ITransactionModel) => {
                return a.date < b.date ? 1 : -1;
            }
        );

        data.map((item: ITransactionModel) => {
            if (item.type === "entrada") {
                incomes.push(item.value);
            } else {
                expenses.push(item.value);
            }
        });

        setTotalIncomes(incomes.reduce((a: number, b: number) => a + b, 0));
        setTotalExpenses(expenses.reduce((a: number, b: number) => a + b, 0));

        setLastIncomeDate(new Date(incomesSort[0].date).toLocaleDateString());
        setLastExpenseDate(new Date(expensesSort[0].date).toLocaleDateString());
    }

    useEffect(() => {
        getFullData();
    }, [year, month]);

    return (
        <DashboardContainer>
            <div className="headerContainer">
                <div>
                    <h1 className="title">Dashboard</h1>
                    <div className="titleUnderline"></div>
                </div>
                <div className="filterContainer">
                    <select
                        placeholder="Ano"
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                    >
                        <option value={undefined}></option>
                        <option value={currentYear}>{currentYear}</option>
                        <option value={currentYear - 1}>{currentYear - 1}</option>
                        <option value={currentYear - 2}>{currentYear - 2}</option>
                        <option value={currentYear - 3}>{currentYear - 3}</option>
                        <option value={currentYear - 4}>{currentYear - 4}</option>
                    </select>

                    <select
                        placeholder="Mês"
                        value={month}
                        onChange={(e) => setMonth(Number(e.target.value))}
                    >
                        <option value={undefined}></option>
                        <option value={1}>Janeiro</option>
                        <option value={2}>Fevereiro</option>
                        <option value={3}>Março</option>
                        <option value={4}>Abril</option>
                        <option value={5}>Maio</option>
                        <option value={6}>Junho</option>
                        <option value={7}>Julho</option>
                        <option value={8}>Agosto</option>
                        <option value={9}>Setembro</option>
                        <option value={10}>Outubro</option>
                        <option value={11}>Novembro</option>
                        <option value={12}>Dezembro</option>
                    </select>

                    <button
                        className="clear"
                        disabled={!year && !month}
                        onClick={(e) => {
                            setMonth(''), setYear('');
                        }}
                    >
                        <AiOutlineClear />
                    </button>
                </div>
            </div>
            <div className="firstCardsContainer">
                <div className="balaceCard">
                    <div>
                        <span>saldo</span>
                        <CountUp
                            className="account-balance"
                            start={0}
                            end={totalIncomes - totalExpenses}
                            duration={0.5}
                            separator="."
                            decimals={2}
                            decimal=","
                            prefix="R$ "
                        >
                            {({ countUpRef }) => (
                                <div className="value-container">
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <span>atualizado com base nas entradas e saídas</span>
                </div>
                <div className="incomesCard">
                    <div>
                        <span>entradas</span>
                        <CountUp
                            className="account-balance"
                            start={0}
                            end={totalIncomes}
                            duration={0.5}
                            separator="."
                            decimals={2}
                            decimal=","
                            prefix="R$ "
                        >
                            {({ countUpRef }) => (
                                <div className="value-container">
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <span>última movimentação em {lastIncomeDate}</span>
                </div>
                <div className="withdrawsCard">
                    <div>
                        <span>saídas</span>
                        <CountUp
                            className="account-balance"
                            start={0}
                            end={totalExpenses}
                            duration={0.5}
                            separator="."
                            decimals={2}
                            decimal=","
                            prefix="R$ "
                        >
                            {({ countUpRef }) => (
                                <div className="value-container">
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                    </div>
                    <span>última movimentação em {lastExpenseDate}</span>
                </div>
            </div>
            <div className="secondCardsContainer">
                <div className="messageCard">
                    <span className="title">
                        {totalIncomes > totalExpenses
                            ? "Muito bem! Sua carteira está positiva!"
                            : "Que pena, sua carteira está negativa."}
                    </span>
                    <span className="subtitle">
                        {totalIncomes > totalExpenses
                            ? "Considere investir o seu saldo!"
                            : "Considere cortar alguns gastos!"}
                    </span>
                </div>
                <div className="pieChartCard">
                    <div className="info">
                        <span className="title">Relação</span>
                        <div className="balance">
                            <div className="incomes-balance">
                                {`${
                                    balanceCalc(totalIncomes, totalExpenses)
                                        .incomesPercentage
                                }%`}
                            </div>
                            <span className="text">Entradas</span>
                        </div>
                        <div className="balance">
                            <div className="expenses-balance">
                                {`${
                                    balanceCalc(totalIncomes, totalExpenses)
                                        .expensesPercentage
                                }%`}
                            </div>
                            <span className="text">Saídas</span>
                        </div>
                    </div>
                    <PieChartComponent
                        incomes={totalIncomes}
                        expenses={totalExpenses}
                    />
                </div>
            </div>
            <div className="lineChartCard">
                <div className="info">
                    <span className="title">Histórico de saldo</span>
                    <div className="legend">
                        <div className="incomes">
                            <div className="incomes-color"></div>
                            <span className="text">Entradas</span>
                        </div>
                        <div className="expenses">
                            <div className="expenses-color"></div>
                            <span className="text">Saídas</span>
                        </div>
                    </div>
                </div>
                <LineChartComponent data={data} />
            </div>
            <div className="lastCardsContainer">
                <div className="columnIncomesChartCard"></div>
                <div className="columnWithdrawsChartCard"></div>
            </div>
        </DashboardContainer>
    );
}
