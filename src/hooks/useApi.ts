import { ITransactionModel } from "../models/TransactionModel";
import axios from "axios";

export const useApi = () => ({
    
    newTransaction: async (data: ITransactionModel) => {
        const response = await axios.post("http://localhost:3333/transactions", data)
        return response;
    },  

    getTransactionsByType: async (
        year: number,
        month: number,
        type: string,
        user_id: string
    ) => {
        const response = await axios.get(
            `http://localhost:3333/transactions?type=${type}&user_id=${user_id}`
        );
        return response.data;
    },

    getAllTransactions: async (
        user_id: string,
        year: any,
        month: any
    ) => {
        const response = await axios.get(
            `http://localhost:3333/transactions?user_id=${user_id}`
        );
        return response.data;
    },

    getTransactionById: async (id: string | null) => {
        const response = await axios.get(
            `http://localhost:3333/transactions/${id}`
        );
        return response.data;
    },

    updateTransaction: async (id: string, data: ITransactionModel) => {
        const response = await axios.put(
            `http://localhost:3333/transactions/${id}`,
            data
        );
        return response.data;
    },

    deleteTransaction: async (id: string) => {
        const response = await axios.delete(
            `http://localhost:3333/transactions/${id}`
        );
        return response.data;
    },

    validateToken: async (token: string) => {
        const response = await axios.get(
            `http://localhost:3333/users?token=${token}`
        );
        
        return response.data[0];
    },

    signin: async (email: string, password: string) => {
        //const response = await axios.post(`http://localhost:3333/users`, {email, password})
        const response = await axios.get(`http://localhost:3333/users?email=${email}&password=${password}`)
 
        return {
            user: response.data[0],
            token: response.data[0].token
        }
        
    },

    signout: async () => {
        const response = axios.post("http://localhost:3333/users/signout");
    },

    validateUser: async (name: string, email: string, password: string) => {
        const api = useApi();
        const response = await axios.get(`http://localhost:3333/users?email=${email}`);

        if (response.status === 200) {
            return await api.register(name, email, password);
        }

        return "E-mail já cadastrado.";
    },

    register: async (name: string, email: string, password: string) => {
        const response = await axios.post("http://localhost:3333/users", {
            name,
            email,
            password,
        });

        return response.data;
    },

});

