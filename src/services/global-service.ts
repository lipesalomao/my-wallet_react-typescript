import { ITransactionModel } from "./../models/TransactionModel";
import axios from "axios";

const user_id = "ABC123";

export async function newTransaction(data: ITransactionModel) {
    const response = await axios
        .post("http://localhost:3333/transactions", data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    return response;
}

export async function getTransactions(
    year: number,
    month: number,
    type: string
) {
    const response = await axios.get(
        `http://localhost:3333/transactions?type=${type}&user_id=${user_id}`
    );
    return response.data;
}

export async function getTransactionById(id: string | null) {
    const response = await axios.get(
        `http://localhost:3333/transactions/${id}`
    );
    return response.data;
}

export async function updateTransaction(id: string, data: ITransactionModel) {
    const response = await axios.put(
        `http://localhost:3333/transactions/${id}`,
        data
    );
    return response.data;
}

export async function deleteTransaction(id: string) {
    const response = await axios.delete(
        `http://localhost:3333/transactions/${id}`
    );
    return response.data;
}
