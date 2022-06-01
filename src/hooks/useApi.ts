import { ITransactionModel } from "../models/TransactionModel";
import axios from "axios";

export const useApi = () => ({
    
    newTransaction: async (data: ITransactionModel) => {
        const response = await axios.post("http://localhost:3330/transactions", data)
        return response;
    },  

    getTransactionsByType: async (
        year: number,
        month: number,
        type: string,
        user_id: string
    ) => {
        const response = await axios.get(
            `http://localhost:3330/transactions?type=${type}&user_id=${user_id}`
        );
        return response.data;
    },

    getAllTransactions: async (
        year: number,
        month: number,
        user_id: string
    ) => {
        const response = await axios.get(
            `http://localhost:3330/transactions?user_id=${user_id}`
        );
        return response.data;
    },

    getTransactionById: async (id: string | null) => {
        const response = await axios.get(
            `http://localhost:3330/transactions/${id}`
        );
        return response.data;
    },

    updateTransaction: async (id: string, data: ITransactionModel) => {
        const response = await axios.put(
            `http://localhost:3330/transactions/${id}`,
            data
        );
        return response.data;
    },

    deleteTransaction: async (id: string) => {
        const response = await axios.delete(
            `http://localhost:3330/transactions/${id}`
        );
        return response.data;
    },

    validateToken: async (token: string) => {
        const response = await axios.get(
            `http://localhost:3330/users?token=${token}`
        );
        
        return response.data[0];
    },

    signin: async (email: string, password: string) => {
        //const response = await axios.post(`http://localhost:3330/users`, {email, password})
        const response = await axios.get(`http://localhost:3330/users?email=${email}&password=${password}`)
 
        return {
            user: response.data[0],
            token: response.data[0].token
        }
        
    },

    signout: async () => {
        const response = axios.post("http://localhost:3330/users/signout");
    },

    validateUser: async (name: string, email: string, password: string) => {
        const api = useApi();
        const response = await axios.get(`http://localhost:3330/users?email=${email}`);

        if (response.status === 200) {
            return await api.register(name, email, password);
        }

        return "E-mail já cadastrado.";
    },

    register: async (name: string, email: string, password: string) => {
        const response = await axios.post("http://localhost:3330/users", {
            name,
            email,
            password,
        });

        return response.data;
    },

});

