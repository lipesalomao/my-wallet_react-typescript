import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { ITransactionModel } from "../../models/TransactionModel";
import { useApi } from "../../hooks/useApi";
import { Row } from "../Row";
import { ListContainer } from "./styles";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export function List(props: any) {
    const currentYear = new Date().getFullYear();
    const api = useApi();
    const auth: any = useContext(AuthContext);
    const { text } = useContext(ThemeContext);

    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
    const [rows, setRows] = useState<ITransactionModel[]>([]);

    async function getTransactionByType() {
        await api
            .getTransactionsByType(year, month, props.type, auth.user.uid)
            .then((res: any) => {
                setRows(res);
            });
    }

    function populateList() {
        if (rows.length > 0) {
            rows.sort((a: ITransactionModel, b: ITransactionModel) => {
                return a.date < b.date ? 1 : -1;
            });
            return rows.map((row: ITransactionModel) => {
                return (
                    <Row
                        key={row.id}
                        userId={row.user_id}
                        id={row.id}
                        title={row.title}
                        type={row.type}
                        frequency={row.frequency}
                        value={row.value}
                    />
                );
            });
        } else {
            return (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5rem",
                        color: `${text.primary}`,
                    }}
                >
                    <h3 style={{ opacity: "0.4" }}>Sem dados para exibir.</h3>
                </div>
            );
        }
    }

    useEffect(() => {
        getTransactionByType().then(() => {
            populateList();
        });
    }, [year, month]);

    return (
        <ListContainer type={props.type}>
            <div className="headerContainer">
                <div>
                    <h1 className="title">{props.type === "entrada" ? "Entradas" : "Saídas"}</h1>
                    <div className="titleUnderline"></div>
                </div>
                <div className="filterContainer">
                    <select
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                    >
                        <option value={currentYear}>{currentYear}</option>
                        <option value={currentYear - 1}>{currentYear - 1}</option>
                        <option value={currentYear - 2}>{currentYear - 2}</option>
                        <option value={currentYear - 3}>{currentYear - 3}</option>
                        <option value={currentYear - 4}>{currentYear - 4}</option>
                    </select>

                    <select
                        value={month}
                        onChange={(e) => setMonth(Number(e.target.value))}
                    >
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
                </div>
            </div>

            <div className="typeContainer">
                <div className="always">
                    <span>Recorrentes</span>
                    <div className="accentUnderline"></div>
                </div>
                <div className="sometimes">
                    <span>Eventuais</span>
                    <div className="warnUnderline"></div>
                </div>
            </div>
            <ul className="listRows">{populateList()}</ul>
        </ListContainer>
    );
}
