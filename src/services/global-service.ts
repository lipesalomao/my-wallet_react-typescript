import { ITransactionModel } from "./../models/TransactionModel";
import axios from "axios";

enum Months {
    Janeiro = 1,
    Fevereiro = 2,
    Março = 3,
    Abril = 4,
    Maio = 5,
    Junho = 6,
    Julho = 7,
    Agosto = 8,
    Setembro = 9,
    Outubro = 10,
    Novembro = 11,
    Dezembro = 12,
}

export  async function newTransaction(data: ITransactionModel) {
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

export async function getTransactions(year: number, month: number, type:string){
    console.log(year, month, type);
    const response = await axios.get(`http://localhost:3333/transactions?year=${year}&month=${month}&type=${type}`)
    console.log(response.data)
    return  response.data;
}
