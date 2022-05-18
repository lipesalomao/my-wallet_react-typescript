import { useContext, useEffect, useState } from "react";
import { NewTransactionContainer } from "./styles";
import { useApi } from "../../hooks/useApi";
import { ITransactionModel } from "../../models/TransactionModel";
import { useNavigate, useParams } from "react-router-dom";
import br from "date-fns/locale/pt-BR";
import DatePicker from "react-datepicker";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export function NewTransaction() {
    const location = useParams();
    const api = useApi()

    useEffect(() => {
        location.id ? populateForm(location.id) : null;
    }, []);

    const populateForm = (id: string | null) => {
        api.getTransactionById(id).then((res: ITransactionModel) => {
            setTitle(res.title);
            setType(res.type);
            setFrequency(res.frequency);
            setValue(res.value);
            setDate(new Date(res.date));
            setDescription(res.description ? res.description : "");
        });
    };

    const [title, setTitle] = useState<string>("");
    const [type, setType] = useState<string>("entrada");
    const [frequency, setFrequency] = useState<string>("recorrente");
    const [date, setDate] = useState<Date>(new Date());
    const [value, setValue] = useState<number>(0);
    const [description, setDescription] = useState<string>("");

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const data: ITransactionModel = {
        user_id: auth.user![0].uid,
        title: title,
        type: type,
        frequency: frequency,
        date: date,
        value: value,
        description: description,
    };
    function handleSubmit() {
        setTitle("");
        setType("entrada");
        setFrequency("recorrente");
        setDate(new Date());
        setValue(0);
        setDescription("");

        if (location.id) {
            api.updateTransaction(location.id, data);
        } else {
            api.newTransaction(data);
        }

        redirect();
    }

    function deleteTransactionHandler() {
        api.deleteTransaction(location.id!);

        redirect();
    }

    function redirect() {
        if (type === "entrada") {
            navigate("/in");
        } else {
            navigate("/out");
        }
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
                        required={true}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="detailsInputsContainer">
                    <div className="type">
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
                    <div className="date">
                        <span>Data</span>
                        <div>
                            <DatePicker
                                className="datePicker"
                                locale={br}
                                dateFormat={"dd/MM/yyyy"}
                                selected={date}
                                onChange={(date: any) => setDate(date)}
                            />
                        </div>
                    </div>
                    <div className="frequency">
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
                    <div className="value">
                        <span>Valor</span>
                        <input
                            
                            type="number"
                            name="value"
                            value={value}
                            required={true}
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
                    {location.id ? (
                        <button onClick={() => deleteTransactionHandler()}>
                            Excluir
                        </button>
                    ) : (
                        <div></div>
                    )}
                    <div>
                        <button onClick={() => navigate("/")}>
                            Voltar
                        </button>
                        <button
                            disabled={!title || !date || !value}
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            {location.id ? "Atualizar" : "Cadastrar"}
                        </button>
                    </div>
                </div>
            </div>
        </NewTransactionContainer>
    );
}
