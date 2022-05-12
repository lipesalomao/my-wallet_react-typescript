import { ITransactionModel } from "./../models/TransactionModel";
import axios from "axios";


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
    const response = await axios.get(`http://localhost:3333/transactions?type=${type}`)
    console.log(response.data)
    return  response.data;
}
