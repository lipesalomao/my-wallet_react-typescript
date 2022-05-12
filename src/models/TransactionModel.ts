export interface ITransactionModel {
    id?: number;
    title: string;
    type: string;
    date: string;
    frequency: string;
    value: number;
    description?: string;
}