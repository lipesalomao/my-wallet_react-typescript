import { useState } from "react";
import { NewTransactionContainer } from "./styles";
import { newTransaction } from "../../services/global-service";
import { ITransactionModel } from "../../models/TransactionModel";


export function NewTransaction() {
        
    const [title, setTitle] = useState("");
    const [type, setType] = useState("entrada");
    const [frequency, setFrequency] = useState("recorrente");
    const [date, setDate] = useState("");
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("");

    function handleSubmit(
        title: string,
        type: string,
        frequency: string,
        date: string,
        value: number,
        description: string
    ) {
        const data: ITransactionModel = {
            title: title,
            type: type,
            frequency: frequency,
            date: date,
            value: value,
            description: description,
        };
        setTitle("");
        setType("entrada");
        setFrequency("recorrente");
        setDate("");
        setValue(0);
        setDescription("");

        newTransaction(data);
    }

    return (
        <NewTransactionContainer>
            <div className="headerContainer">
                <div>
                    <h1 className="title">Cadastrar</h1>
                    <div className="titleUnderline"></div>
                </div>
            </div>

            <div className="formContainer">
                <div className="titleInputContainer">
                    <span>Título</span>
                    <input
                        type="text"
                        name="title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="detailsInputsContainer">
                    <div>
                        <span>Tipo</span>
                        <select
                            name="type"
                            required
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="entrada">Entrada</option>
                            <option value="saída">Saída</option>
                        </select>
                    </div>
                    <div>
                        <span>Data</span>
                        <input
                            type="date"
                            name="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <span>Frequência</span>
                        <select
                            name="frequency"
                            value={frequency}
                            required
                            onChange={(e) => setFrequency(e.target.value)}
                        >
                            <option value="recorrente">Recorrente</option>
                            <option value="eventual">Eventual</option>
                        </select>
                    </div>
                    <div>
                        <span>Valor</span>
                        <input
                            type="number"
                            name="value"
                            value={value}
                            required
                            onChange={(e) => setValue(Number(e.target.value))}
                        />
                    </div>
                </div>
                <div className="descriptionInputContainer">
                    <span>Descrição</span>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        name="description"
                        value={description}
                    ></textarea>
                </div>

                <div className="actionsContainer">
                    <a>Excluir</a>
                    <div>
                        <button onClick={()=> window.location.href = '/'}>Voltar</button>
                        <button
                            onClick={(event) =>
                                handleSubmit(
                                    title,
                                    type,
                                    frequency,
                                    date,
                                    value,
                                    description
                                )
                            }
                        >
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        </NewTransactionContainer>
    );
}
