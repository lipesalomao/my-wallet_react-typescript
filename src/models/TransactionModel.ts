export interface ITransactionModel {
    user_id: string;
    id?: number;
    title: string;
    type: string;
    date: string;
    frequency: string;
    value: number;
    description?: string;
}